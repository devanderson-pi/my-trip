import { ViewProps } from 'react-native';

import { StyledLayout } from './styles';

interface LayoutProps extends ViewProps {
  justify?: 'center' | 'flex-end' | 'flex-start';
}

const Layout = ({ children, justify = 'flex-start', testID }: LayoutProps) => {
  return (
    <StyledLayout
      justify={justify}
      testID={testID}
    >
      {children}
    </StyledLayout>
  );
};

export default Layout;
