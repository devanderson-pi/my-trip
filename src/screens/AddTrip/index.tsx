import { zodResolver } from '@hookform/resolvers/zod';
import firestore from '@react-native-firebase/firestore';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { TripRegistration } from '../../data/@types/tripTypes';
import { tripSchema } from '../../data/schemas/tripSchema';
import { useAuth } from '../../hooks/useAuth';
import { RootStackScreenProps } from '../../navigation/types';
import Button from '../../ui/components/Button';
import Flex from '../../ui/components/Flex';
import Input from '../../ui/components/Input';
import Layout from '../../ui/components/Layout';
import ShowErrorSnackbar from '../../ui/components/ShowErrorSnackbar';
import Spacer from '../../ui/components/Spacer';
import Text from '../../ui/components/Text';
import theme from '../../ui/theme';

const AddTrip = ({ navigation }: RootStackScreenProps<'AddTrip'>) => {
  const { user } = useAuth();
  const {
    control,
    formState: { isSubmitting, isValid },
    handleSubmit,
  } = useForm<TripRegistration>({
    mode: 'onBlur',
    resolver: zodResolver(tripSchema),
  });
  const { t } = useTranslation(['addTrip', 'common']);

  const onSubmit: SubmitHandler<TripRegistration> = async data => {
    try {
      await firestore()
        .collection('trips')
        .add({ ...data, createdAt: new Date(), userId: user?.uid });

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
        name="location"
        render={({
          field: { onBlur, onChange, value },
          fieldState: { error },
        }) => (
          <Flex gap={8}>
            <Text
              color={theme.colors.secondary}
              nativeID="locationLabel"
              size="sm"
              weight="semibold"
            >
              {t('label.location')}
            </Text>

            <Input
              accessibilityLabel={t('label.location')}
              accessibilityLabelledBy="locationLabel"
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
        isLoading={isSubmitting}
        loadingText={t('addTrip:button.loading')}
        onPress={handleSubmit(onSubmit)}
      >
        {t('button.addTrip')}
      </Button>
    </Layout>
  );
};

export default AddTrip;
