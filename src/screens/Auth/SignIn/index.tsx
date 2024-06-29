import { useTranslation } from 'react-i18next';

import Button from '../../../ui/components/Button';
import Flex from '../../../ui/components/Flex';
import Heading from '../../../ui/components/Heading';
import Input from '../../../ui/components/Input';
import Layout from '../../../ui/components/Layout';
import Spacer from '../../../ui/components/Spacer';
import Text from '../../../ui/components/Text';
import theme from '../../../ui/theme';

const SignIn = () => {
  const { t } = useTranslation(['signIn', 'common']);

  return (
    <Layout
      justify="center"
      testID="signInScreen"
    >
      <Flex align="center">
        <Heading>{t('heading')}</Heading>
      </Flex>

      <Spacer size={48} />

      <Flex gap={8}>
        <Text
          color={theme.colors.secondary}
          size="sm"
          weight="semibold"
        >
          {t('common:label.email')}
        </Text>

        <Input type="email-address" />
      </Flex>

      <Spacer size={16} />

      <Flex gap={8}>
        <Text
          color={theme.colors.secondary}
          size="sm"
          weight="semibold"
        >
          {t('common:label.password')}
        </Text>

        <Input secureTextEntry />
      </Flex>

      <Spacer size={32} />

      <Button>{t('button.signIn')}</Button>

      <Spacer size={16} />

      <Button
        label={[
          {
            color: theme.colors.text,
            text: t('button.signUp', { returnObjects: true })[0],
          },
          { text: t('button.signUp', { returnObjects: true })[1] },
        ]}
        size="md"
        variant="ghost"
      />
    </Layout>
  );
};

export default SignIn;
