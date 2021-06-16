import styled from 'styled-components/native';
import Text from '~/components/Text';

export const WelcomeText = styled(Text)`
  margin-bottom: ${(props) => props.marginBottom ?? 0}px;
`;

export const Bold = styled(Text).attrs({
  POPPINS700: true,
})``;
