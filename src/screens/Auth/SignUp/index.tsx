import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { UserRegistration } from '../../../data/@types/authType';
import { signUpSchema } from '../../../data/schemas/authSchema';
import { RootStackScreenProps } from '../../../navigation/types';
import Button from '../../../ui/components/Button';
import Flex from '../../../ui/components/Flex';
import Heading from '../../../ui/components/Heading';
import Input from '../../../ui/components/Input';
import Layout from '../../../ui/components/Layout';
import Spacer from '../../../ui/components/Spacer';
import Text from '../../../ui/components/Text';
import theme from '../../../ui/theme';

const SignUp = ({ navigation }: RootStackScreenProps<'SignUp'>) => {
  const {
    control,
    formState: { isValid },
    handleSubmit,
  } = useForm<UserRegistration>({
    resolver: zodResolver(signUpSchema),
  });
  const { t } = useTranslation(['signUp', 'common']);

  const onSubmit: SubmitHandler<UserRegistration> = data => {
    console.log(data);
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
        render={({ field: { onChange, value } }) => {
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
                onChange={onChange}
                value={value}
              />
            </Flex>
          );
        }}
      />

      <Spacer size={16} />

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
        disabled={!isValid}
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
