import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { RootStackScreenProps } from '../../../navigation/types';
import Menu from '../../../ui/components/Menu';
import ShowErrorSnackbar from '../../../ui/components/ShowErrorSnackbar';
import theme from '../../../ui/theme';

interface TripDetailsHeaderRightProps {
  tripId: string;
}

const TripDetailsHeaderRight = ({ tripId }: TripDetailsHeaderRightProps) => {
  const { goBack, navigate } =
    useNavigation<RootStackScreenProps<'TripDetails'>['navigation']>();
  const { t } = useTranslation(['tripDetails', 'common']);

  const [isOpen, setIsOpen] = useState(false);

  const handleDeleteTrip = async () => {
    try {
      await firestore().collection('trips').doc(tripId).delete();
      goBack();
    } catch (error) {
      ShowErrorSnackbar(t('common:errors.request.unexpectedError'));
    }
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsOpen(true)}
        testID="menuTrigger"
      >
        <Icon
          color={theme.colors.secondary}
          name="dots-vertical"
          size={24}
        />
      </TouchableOpacity>

      <Menu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        options={[
          {
            action: () => navigate('AddExpense', { tripId }),
            icon: 'plus',
            text: t('menu.addExpense'),
          },
          {
            action: handleDeleteTrip,
            icon: 'trash',
            text: t('menu.deleteTrip'),
            color: theme.colors.error,
          },
        ]}
        position={{
          right: 24,
          top: 52,
        }}
      />
    </>
  );
};

export default TripDetailsHeaderRight;
