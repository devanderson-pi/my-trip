import { zodResolver } from '@hookform/resolvers/zod';
import auth from '@react-native-firebase/auth';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { FirebaseSignInError } from '../../../@types/firebase/auth';
import { UserCredential } from '../../../data/@types/authType';
import { signInSchema } from '../../../data/schemas/authSchema';
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

const SignIn = ({ navigation }: RootStackScreenProps<'SignIn'>) => {
  const {
    control,
    formState: { isSubmitting, isValid },
    handleSubmit,
  } = useForm<UserCredential>({
    resolver: zodResolver(signInSchema),
  });
  const { t } = useTranslation(['signIn', 'authError', 'common']);

  const onSubmit: SubmitHandler<UserCredential> = async ({
    email,
    password,
  }) => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      const firebaseError = error as FirebaseSignInError;

      if (firebaseError.code !== 'auth/user-disabled') {
        ShowErrorSnackbar(t('authError:requestErrors.invalidCredentials'));
        return;
      }

      ShowErrorSnackbar(t('common:errors.request.unexpectedError'));
    }
  };

  return (
    <Layout
      justify="center"
      testID="signInScreen"
    >
      <Flex align="center">
        <Heading size="3xl">{t('heading')}</Heading>
      </Flex>

      <Spacer size={48} />

      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => {
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
                onChange={onChange}
                type="email-address"
                value={value}
              />
            </Flex>
          );
        }}
      />

      <Spacer size={16} />

      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => {
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
                onChange={onChange}
                secureTextEntry
                value={value}
              />
            </Flex>
          );
        }}
      />

      <Spacer size={32} />

      <Button
        disabled={isSubmitting || !isValid}
        isLoading={isSubmitting}
        onPress={handleSubmit(onSubmit)}
      >
        {t('button.signIn')}
      </Button>

      <Spacer size={16} />

      <Button
        label={[
          {
            color: theme.colors.text,
            text: t('button.goToSignUp', { returnObjects: true })[0],
          },
          {
            color: theme.colors.secondary,
            text: t('button.goToSignUp', { returnObjects: true })[1],
          },
        ]}
        onPress={() => navigation.navigate('SignUp')}
        size="md"
        variant="ghost"
      />
    </Layout>
  );
};

export default SignIn;
