import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, ListRenderItem } from 'react-native';

import { Trip } from '../../data/@types/tripTypes';
import Card from '../../ui/components/Card';
import Heading from '../../ui/components/Heading';
import IconButton from '../../ui/components/IconButton';
import Layout from '../../ui/components/Layout';
import Text from '../../ui/components/Text';
import {
  contentContainerStyle,
  StyledCardBody,
  StyledFloatingLabel,
  StyledSeparator,
} from './styles';

const Home = () => {
  const { t } = useTranslation('home');

  const [trips] = useState<Trip[]>([]);

  const renderItem: ListRenderItem<Trip> = useCallback(({ item }) => {
    return (
      <Card onPress={() => null}>
        <StyledCardBody>
          <Heading>{item.title}</Heading>
          <Text>{item.location}</Text>
        </StyledCardBody>
      </Card>
    );
  }, []);

  return (
    <Layout>
      <FlatList
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
          onPress={() => null}
        />
      </StyledFloatingLabel>
    </Layout>
  );
};

export default Home;
