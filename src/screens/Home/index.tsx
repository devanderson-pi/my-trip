import firestore from '@react-native-firebase/firestore';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, ListRenderItem } from 'react-native';

import { Trip } from '../../data/@types/tripTypes';
import { useAuth } from '../../hooks/useAuth';
import { HomeTabScreenProps } from '../../navigation/types';
import Card from '../../ui/components/Card';
import Heading from '../../ui/components/Heading';
import IconButton from '../../ui/components/IconButton';
import Layout from '../../ui/components/Layout';
import ShowErrorSnackbar from '../../ui/components/ShowErrorSnackbar';
import Text from '../../ui/components/Text';
import {
  contentContainerStyle,
  StyledCardBody,
  StyledFloatingLabel,
  StyledSeparator,
} from './styles';

const Home = ({ navigation }: HomeTabScreenProps<'MyTrips'>) => {
  const { user } = useAuth();
  const { t } = useTranslation(['home', 'common']);

  const [trips, setTrips] = useState<Trip[]>([]);

  const renderItem: ListRenderItem<Trip> = useCallback(
    ({ item }) => {
      return (
        <Card
          accessibilityHint={t('accessibility.list.item.hint', {
            title: item.title,
          })}
          accessibilityRole="button"
          onPress={() => navigation.navigate('TripDetails', { ...item })}
        >
          <StyledCardBody>
            <Heading>{item.title}</Heading>
            <Text>{item.location}</Text>
          </StyledCardBody>
        </Card>
      );
    },
    [navigation, t]
  );

  useEffect(() => {
    if (user) {
      const subscriber = firestore()
        .collection('trips')
        .orderBy('createdAt', 'desc')
        .where('userId', '==', user.uid)
        .onSnapshot(
          querySnapshot => {
            const tripsData: Trip[] = [];

            querySnapshot.forEach(documentSnapshot => {
              tripsData.push({
                ...documentSnapshot.data(),
                id: documentSnapshot.id,
              } as Trip);
            });

            setTrips(tripsData);
          },
          () => {
            ShowErrorSnackbar(t('common:errors.request.unexpectedError'));
          }
        );

      return () => subscriber();
    }
  }, [t, user]);

  return (
    <Layout>
      <FlatList
        accessibilityRole="list"
        contentContainerStyle={trips.length === 0 && contentContainerStyle}
        data={trips}
        ItemSeparatorComponent={StyledSeparator}
        keyExtractor={({ id }, index) => id ?? index}
        ListEmptyComponent={<Text centerText>{t('listEmpty')}</Text>}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />

      <StyledFloatingLabel>
        <IconButton
          accessibilityHint={t('accessibility.button.addTrip.hint')}
          accessibilityLabel={t('accessibility.button.addTrip.label')}
          iconName="plus"
          onPress={() => navigation.navigate('AddTrip')}
        />
      </StyledFloatingLabel>
    </Layout>
  );
};

export default Home;
