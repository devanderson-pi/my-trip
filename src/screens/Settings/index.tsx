import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/Feather';

import Button from '../../ui/components/Button';
import Flex from '../../ui/components/Flex';
import Layout from '../../ui/components/Layout';
import Spacer from '../../ui/components/Spacer';
import Text from '../../ui/components/Text';
import theme from '../../ui/theme';
import { StyledMenuButton, StyledMenuButtonContainer } from './styles';

const Settings = () => {
  const { t } = useTranslation('settings');

  return (
    <Layout>
      <Spacer size={30} />

      <StyledMenuButtonContainer>
        <StyledMenuButton>
          <Flex
            align="center"
            direction="row"
            gap={18}
          >
            <Icon
              color={theme.colors.secondary}
              name="user"
              size={20}
            />

            <Text
              color={theme.colors.secondary}
              weight="medium"
            >
              {t('menu.account')}
            </Text>
          </Flex>
        </StyledMenuButton>
      </StyledMenuButtonContainer>

      <StyledMenuButtonContainer>
        <StyledMenuButton>
          <Flex
            align="center"
            direction="row"
            gap={18}
          >
            <Icon
              color={theme.colors.secondary}
              name="globe"
              size={20}
            />

            <Text
              color={theme.colors.secondary}
              weight="medium"
            >
              {t('menu.language')}
            </Text>
          </Flex>
        </StyledMenuButton>
      </StyledMenuButtonContainer>

      <Spacer size={24} />

      <Button
        color={theme.colors.error}
        variant="ghost"
      >
        {t('menu.signOut')}
      </Button>
    </Layout>
  );
};

export default Settings;
