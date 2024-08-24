import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import firestore from '@react-native-firebase/firestore';
import i18next from 'i18next';
import { forwardRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Expense } from '../../../data/@types/expenseType';
import Flex from '../../../ui/components/Flex';
import IconButton from '../../../ui/components/IconButton';
import ShowErrorSnackbar from '../../../ui/components/ShowErrorSnackbar';
import Spacer from '../../../ui/components/Spacer';
import Text from '../../../ui/components/Text';
import theme from '../../../ui/theme';
import formatCurrency from '../../../ui/utils/formatCurrency';

interface BottomSheetProps {
  dismiss: () => void;
  expense: Expense & { tripId: string };
}

const ExpenseBottomSheet = forwardRef<
  BottomSheetModalMethods,
  BottomSheetProps
>(({ dismiss, expense }, ref) => {
  const { t } = useTranslation(['tripDetails', 'common']);

  const handleDeleteExpense = async () => {
    try {
      await firestore()
        .collection('trips')
        .doc(expense.tripId)
        .collection('expenses')
        .doc(expense.id)
        .delete();

      dismiss();
    } catch (error) {
      ShowErrorSnackbar(t('common:errors.request.unexpectedError'));
    }
  };

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        opacity={0.63}
        {...props}
      />
    ),
    []
  );

  return (
    <BottomSheetModal
      backdropComponent={renderBackdrop}
      index={0}
      ref={ref}
      snapPoints={['50%']}
    >
      <BottomSheetView>
        <Spacer size={24} />

        <Flex align="center">
          <Text
            color={theme.colors.secondary}
            weight="semibold"
          >
            {expense.title}
          </Text>

          <Spacer size={10} />

          <Text
            color={theme.colors.error}
            weight="semibold"
          >
            &minus;{formatCurrency(Number(expense.amount), i18next.language)}
          </Text>
        </Flex>

        <Spacer size={32} />

        <Flex
          direction="row"
          gap={32}
          justify="center"
        >
          <IconButton
            accessibilityHint={t(
              'accessibility.expenseBottomSheet.deleteExpense.accessibilityHint'
            )}
            accessibilityLabel={t(
              'accessibility.expenseBottomSheet.deleteExpense.accessibilityLabel'
            )}
            iconName="trash"
            onPress={handleDeleteExpense}
            variant="outline"
          />

          <IconButton
            accessibilityHint={t(
              'accessibility.expenseBottomSheet.editExpense.accessibilityHint'
            )}
            accessibilityLabel={t(
              'accessibility.expenseBottomSheet.editExpense.accessibilityLabel'
            )}
            disabled
            iconName="edit-2"
            variant="outline"
          />
        </Flex>
      </BottomSheetView>
    </BottomSheetModal>
  );
});

export default ExpenseBottomSheet;
