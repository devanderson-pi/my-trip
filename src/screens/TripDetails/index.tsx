import i18next from 'i18next';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, ListRenderItem, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { Expense } from '../../data/@types/expenseType';
import { RootStackScreenProps } from '../../navigation/types';
import Card from '../../ui/components/Card';
import Flex from '../../ui/components/Flex';
import Heading from '../../ui/components/Heading';
import Layout from '../../ui/components/Layout';
import Spacer from '../../ui/components/Spacer';
import Text from '../../ui/components/Text';
import theme from '../../ui/theme';
import formatCurrency from '../../ui/utils/formatCurrency';
import { StyledSeparator } from './styles';

const TripDetails = ({ route }: RootStackScreenProps<'TripDetails'>) => {
  const { location, title } = route.params;

  const { t } = useTranslation('tripDetails');

  const [expenses] = useState<Expense[]>([]);

  const renderItem: ListRenderItem<Expense> = useCallback(({ item }) => {
    return (
      <Card>
        <View>
          <Heading>{item.title}</Heading>
          <Text>{item.category}</Text>
        </View>

        <Text
          color={theme.colors.error}
          weight="medium"
        >
          &minus;{formatCurrency(item.amount, i18next.language)}
        </Text>
      </Card>
    );
  }, []);

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
    </Layout>
  );
};

export default TripDetails;
