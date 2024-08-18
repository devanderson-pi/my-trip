import { zodResolver } from '@hookform/resolvers/zod';
import auth from '@react-native-firebase/auth';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { FirebaseSignUpError } from '../../../@types/firebase/auth';
import { UserRegistration } from '../../../data/@types/authType';
import { signUpSchema } from '../../../data/schemas/authSchema';
import { RootStackScreenProps } from '../../../navigation/types';
import Button from '../../../ui/components/Button';
import Flex from '../../../ui/components/Flex';
import Heading from '../../../ui/components/Heading';
import Input from '../../../ui/components/Input';
import Layout from '../../../ui/components/Layout';
import ShowErrorSnackbar from '../../../ui/components/ShowErrorSnackbar';
import Spacer from '../../../ui/components/Spacer';
import Text from '../../../ui/components/Text';
import theme from '../../../ui/theme';

const SignUp = ({ navigation }: RootStackScreenProps<'SignUp'>) => {
  const {
    control,
    formState: { isSubmitting, isValid },
    handleSubmit,
  } = useForm<UserRegistration>({
    mode: 'onBlur',
    resolver: zodResolver(signUpSchema),
  });
  const { t } = useTranslation(['signUp', 'common', 'authError']);

  const onSubmit: SubmitHandler<UserRegistration> = async ({
    email,
    name,
    password,
  }) => {
    try {
      const { user } = await auth().createUserWithEmailAndPassword(
        email,
        password
      );

      await user.updateProfile({ displayName: name });
    } catch (error) {
      const firebaseError = error as FirebaseSignUpError;

      if (firebaseError.code === 'auth/email-already-in-use') {
        ShowErrorSnackbar(t('authError:requestErrors.emailAlreadyInUse'));
        return;
      }

      ShowErrorSnackbar(t('common:errors.request.unexpectedError'));
    }
  };

  return (
    <Layout
      justify="center"
      testID="signUpScreen"
    >
      <Flex align="center">
        <Heading size="3xl">{t('heading')}</Heading>
      </Flex>

      <Spacer size={48} />

      <Controller
        control={control}
        name="name"
        render={({
          field: { onBlur, onChange, value },
          fieldState: { error },
        }) => {
          return (
            <Flex gap={8}>
              <Text
                color={theme.colors.secondary}
                nativeID="nameLabel"
                size="sm"
                weight="semibold"
              >
                {t('common:label.name')}
              </Text>

              <Input
                accessibilityLabel={t('common:label.name')}
                accessibilityLabelledBy="nameLabel"
                onBlur={onBlur}
                onChange={onChange}
                value={value}
              />

              {error && <Text color={theme.colors.error}>{error.message}</Text>}
            </Flex>
          );
        }}
      />

      <Spacer size={16} />

      <Controller
        control={control}
        name="email"
        render={({
          field: { onBlur, onChange, value },
          fieldState: { error },
        }) => {
          return (
            <Flex gap={8}>
              <Text
                color={theme.colors.secondary}
                nativeID="emailLabel"
                size="sm"
                weight="semibold"
              >
                {t('common:label.email')}
              </Text>

              <Input
                accessibilityLabel={t('common:label.email')}
                accessibilityLabelledBy="emailLabel"
                autoCapitalize="none"
                onBlur={onBlur}
                onChange={onChange}
                type="email-address"
                value={value}
              />

              {error && <Text color={theme.colors.error}>{error.message}</Text>}
            </Flex>
          );
        }}
      />

      <Spacer size={16} />

      <Controller
        control={control}
        name="password"
        render={({
          field: { onBlur, onChange, value },
          fieldState: { error },
        }) => {
          return (
            <Flex gap={8}>
              <Text
                color={theme.colors.secondary}
                nativeID="passwordLabel"
                size="sm"
                weight="semibold"
              >
                {t('common:label.password')}
              </Text>

              <Input
                accessibilityLabel={t('common:label.password')}
                accessibilityLabelledBy="passwordLabel"
                autoCapitalize="none"
                onBlur={onBlur}
                onChange={onChange}
                secureTextEntry
                value={value}
              />

              {error && <Text color={theme.colors.error}>{error.message}</Text>}
            </Flex>
          );
        }}
      />

      <Spacer size={32} />

      <Button
        disabled={isSubmitting || !isValid}
        isLoading={isSubmitting}
        loadingText={t('button.loading')}
        onPress={handleSubmit(onSubmit)}
      >
        {t('button.signUp')}
      </Button>

      <Spacer size={16} />

      <Button
        label={[
          {
            color: theme.colors.text,
            text: t('button.goToSignIn', { returnObjects: true })[0],
          },
          {
            color: theme.colors.secondary,
            text: t('button.goToSignIn', { returnObjects: true })[1],
          },
        ]}
        onPress={() => navigation.goBack()}
        size="md"
        variant="ghost"
      />
    </Layout>
  );
};

export default SignUp;
