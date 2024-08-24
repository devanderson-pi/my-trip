import { BottomSheetModal } from '@gorhom/bottom-sheet';
import firestore from '@react-native-firebase/firestore';
import i18next from 'i18next';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, ListRenderItem, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { Expense } from '../../data/@types/expenseType';
import { RootStackScreenProps } from '../../navigation/types';
import Card from '../../ui/components/Card';
import Flex from '../../ui/components/Flex';
import Heading from '../../ui/components/Heading';
import Layout from '../../ui/components/Layout';
import ShowErrorSnackbar from '../../ui/components/ShowErrorSnackbar';
import Spacer from '../../ui/components/Spacer';
import Text from '../../ui/components/Text';
import theme from '../../ui/theme';
import formatCurrency from '../../ui/utils/formatCurrency';
import ExpenseBottomSheet from './components/ExpenseBottomSheet';
import { cardStyle, StyledSeparator } from './styles';

type SelectedExpense = Expense & { tripId: string };

const TripDetails = ({ route }: RootStackScreenProps<'TripDetails'>) => {
  const { id, location, title } = route.params;

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const { t } = useTranslation(['tripDetails', 'common']);

  const [selectedExpense, setSelectedExpense] = useState<SelectedExpense>(
    {} as SelectedExpense
  );
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const handleDismissPress = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  const handlePresentPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const renderItem: ListRenderItem<Expense> = useCallback(
    ({ item }) => {
      return (
        <Card
          onPress={() => {
            setSelectedExpense({ ...item, tripId: id });
            handlePresentPress();
          }}
          style={cardStyle}
        >
          <View>
            <Heading>{item.title}</Heading>
            <Text>{item.category}</Text>
          </View>

          <Text
            color={theme.colors.error}
            weight="medium"
          >
            &minus;{formatCurrency(Number(item.amount), i18next.language)}
          </Text>
        </Card>
      );
    },
    [handlePresentPress, id]
  );

  useEffect(() => {
    if (!id) {
      return;
    }

    const subscriber = firestore()
      .collection('trips')
      .doc(id)
      .collection('expenses')
      .orderBy('createdAt', 'desc')
      .onSnapshot(
        querySnapshot => {
          const expensesData: Expense[] = [];

          querySnapshot.forEach(documentSnapshot => {
            expensesData.push({
              ...documentSnapshot.data(),
              id: documentSnapshot.id,
            } as Expense);

            setExpenses(expensesData);
          });
        },
        () => {
          ShowErrorSnackbar(t('common:errors.request.unexpectedError'));
        }
      );

    return () => subscriber();
  }, [id, t]);

  return (
    <Layout>
      <Spacer size={28} />

      <Heading size="lg">{title}</Heading>

      <Spacer size={8} />

      <Flex
        align="center"
        direction="row"
        gap={8}
      >
        <Icon
          name="map-pin"
          size={16}
        />

        <Text>{location}</Text>
      </Flex>

      <Spacer size={32} />

      <FlatList
        data={expenses}
        ItemSeparatorComponent={StyledSeparator}
        renderItem={renderItem}
        ListEmptyComponent={<Text centerText>{t('list.empty')}</Text>}
        ListHeaderComponent={
          <>
            <Heading>{t('list.header')}</Heading>
            <Spacer size={16} />
          </>
        }
        showsVerticalScrollIndicator={false}
      />

      <ExpenseBottomSheet
        dismiss={handleDismissPress}
        expense={selectedExpense}
        ref={bottomSheetModalRef}
      />
    </Layout>
  );
};

export default TripDetails;
