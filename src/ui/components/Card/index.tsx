import { TouchableOpacityProps } from 'react-native';

import { StyledCard } from './styles';

export const Card = ({ children, ...props }: TouchableOpacityProps) => {
  return <StyledCard {...props}>{children}</StyledCard>;
};

export default Card;
