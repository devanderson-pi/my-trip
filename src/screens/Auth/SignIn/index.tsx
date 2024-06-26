import { useTranslation } from 'react-i18next';
import { Text } from 'react-native';

const SignIn = () => {
  const { t } = useTranslation('signIn');

  return <Text>{t('heading')}</Text>;
};

export default SignIn;
