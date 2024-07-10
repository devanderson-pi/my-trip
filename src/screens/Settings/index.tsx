import auth from '@react-native-firebase/auth';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { HomeTabScreenProps } from '../../navigation/types';
import Button from '../../ui/components/Button';
import Flex from '../../ui/components/Flex';
import Layout from '../../ui/components/Layout';
import Spacer from '../../ui/components/Spacer';
import Text from '../../ui/components/Text';
import theme from '../../ui/theme';
import { StyledMenuButton, StyledMenuButtonContainer } from './styles';

const Settings = ({ navigation }: HomeTabScreenProps<'Settings'>) => {
  const { t } = useTranslation('settings');

  return (
    <Layout>
      <Spacer size={30} />

      <View accessibilityRole="menu">
        <StyledMenuButtonContainer>
          <StyledMenuButton
            accessibilityHint={t('accessibility.menu.account.hint')}
            accessibilityRole="menuitem"
            disabled
          >
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
          <StyledMenuButton
            accessibilityHint={t('accessibility.menu.language.hint')}
            accessibilityRole="menuitem"
            onPress={() => navigation.navigate('Language')}
          >
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
          accessibilityHint={t('accessibility.menu.signOut.hint')}
          accessibilityRole="menuitem"
          color={theme.colors.error}
          onPress={() => {
            auth().signOut();
          }}
          variant="ghost"
        >
          {t('menu.signOut')}
        </Button>
      </View>
    </Layout>
  );
};

export default Settings;
