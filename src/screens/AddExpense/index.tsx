import { zodResolver } from '@hookform/resolvers/zod';
import firestore from '@react-native-firebase/firestore';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { ExpenseRegistration } from '../../data/@types/expenseType';
import { expenseSchema } from '../../data/schemas/expenseSchema';
import { RootStackScreenProps } from '../../navigation/types';
import Button from '../../ui/components/Button';
import Flex from '../../ui/components/Flex';
import Input from '../../ui/components/Input';
import Layout from '../../ui/components/Layout';
import ShowErrorSnackbar from '../../ui/components/ShowErrorSnackbar';
import Spacer from '../../ui/components/Spacer';
import Text from '../../ui/components/Text';
import theme from '../../ui/theme';

const AddExpense = ({
  navigation,
  route,
}: RootStackScreenProps<'AddExpense'>) => {
  const { tripId } = route.params;

  const {
    control,
    formState: { isSubmitting, isValid },
    handleSubmit,
  } = useForm<ExpenseRegistration>({
    mode: 'onBlur',
    resolver: zodResolver(expenseSchema),
  });
  const { t } = useTranslation(['addExpense', 'common']);

  const onSubmit: SubmitHandler<ExpenseRegistration> = async data => {
    try {
      await firestore()
        .collection('trips')
        .doc(tripId)
        .collection('expenses')
        .add({ ...data, createdAt: new Date() });

      navigation.goBack();
    } catch (error) {
      ShowErrorSnackbar(t('common:errors.request.unexpectedError'));
    }
  };

  return (
    <Layout>
      <Spacer size={24} />

      <Controller
        control={control}
        name="title"
        render={({
          field: { onBlur, onChange, value },
          fieldState: { error },
        }) => (
          <Flex gap={8}>
            <Text
              color={theme.colors.secondary}
              nativeID="titleLabel"
              size="sm"
              weight="semibold"
            >
              {t('label.title')}
            </Text>

            <Input
              accessibilityLabel={t('label.title')}
              accessibilityLabelledBy="titleLabel"
              onBlur={onBlur}
              onChange={onChange}
              value={value}
            />

            {error && <Text color={theme.colors.error}>{error.message}</Text>}
          </Flex>
        )}
      />

      <Spacer size={16} />

      <Controller
        control={control}
        defaultValue=""
        name="amount"
        render={({
          field: { onBlur, onChange, value },
          fieldState: { error },
        }) => (
          <Flex gap={8}>
            <Text
              color={theme.colors.secondary}
              nativeID="amountLabel"
              size="sm"
              weight="semibold"
            >
              {t('label.amount')}
            </Text>

            <Input
              accessibilityLabel={t('label.amount')}
              accessibilityLabelledBy="amountLabel"
              onBlur={onBlur}
              onChange={onChange}
              type="numeric"
              value={String(value)}
            />

            {error && <Text color={theme.colors.error}>{error.message}</Text>}
          </Flex>
        )}
      />

      <Spacer size={16} />

      <Controller
        control={control}
        name="category"
        render={({
          field: { onBlur, onChange, value },
          fieldState: { error },
        }) => (
          <Flex gap={8}>
            <Text
              color={theme.colors.secondary}
              nativeID="categoryLabel"
              size="sm"
              weight="semibold"
            >
              {t('label.category')}
            </Text>

            <Input
              accessibilityLabel={t('label.category')}
              accessibilityLabelledBy="categoryLabel"
              onBlur={onBlur}
              onChange={onChange}
              value={value}
            />

            {error && <Text color={theme.colors.error}>{error.message}</Text>}
          </Flex>
        )}
      />

      <Spacer size={48} />

      <Button
        disabled={isSubmitting || !isValid}
        onPress={handleSubmit(onSubmit)}
      >
        {t('button.addExpense')}
      </Button>
    </Layout>
  );
};

export default AddExpense;
