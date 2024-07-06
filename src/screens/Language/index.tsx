import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/Feather';

import Layout from '../../ui/components/Layout';
import Spacer from '../../ui/components/Spacer';
import Text from '../../ui/components/Text';
import theme from '../../ui/theme';
import { StyledMenuButton, StyledMenuButtonContainer } from './styles';

const Language = () => {
  const { t } = useTranslation('language');

  const handleChangeLanguage = (lng: 'en-US' | 'pt-BR') => {
    i18next.changeLanguage(lng);
  };

  return (
    <Layout>
      <Spacer size={16} />

      <StyledMenuButtonContainer>
        <StyledMenuButton onPress={() => handleChangeLanguage('en-US')}>
          <Text color={theme.colors.secondary}>{t('menu.english')}</Text>

          {i18next.language === 'en-US' && (
            <Icon
              color={theme.colors.success}
              name="check"
              size={24}
            />
          )}
        </StyledMenuButton>
      </StyledMenuButtonContainer>

      <StyledMenuButtonContainer>
        <StyledMenuButton onPress={() => handleChangeLanguage('pt-BR')}>
          <Text color={theme.colors.secondary}>{t('menu.portuguese')}</Text>

          {i18next.language === 'pt-BR' && (
            <Icon
              color={theme.colors.success}
              name="check"
              size={24}
            />
          )}
        </StyledMenuButton>
      </StyledMenuButtonContainer>
    </Layout>
  );
};

export default Language;
