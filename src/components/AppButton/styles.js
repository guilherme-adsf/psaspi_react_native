import styled from 'styled-components/native';
import {ELECTRON_BLUE} from '~/theme/colors';
import Text from '~/components/Text';

export const Container = styled.TouchableOpacity`
  width: 100%;
  background-color: ${({transparent}) =>
    transparent ? 'transparent' : ELECTRON_BLUE};
  border-radius: 10px;
  border-width: ${({transparent}) => (transparent ? '2px' : '0px')};
  border-color: ${({transparent}) =>
    transparent ? ELECTRON_BLUE : 'transparent'};
  align-self: center;
  align-items: center;
  margin-top: ${(props) => props.marginTop ?? 20}px;
  margin-bottom: ${(props) => props.marginBottom ?? 0}px;
`;

export const LoadingContainer = styled.View`
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const Label = styled(Text).attrs((props) => ({
  POPPINS700: true,
  color: props.transparent ? ELECTRON_BLUE : '#fff',
  FONTSIZE15: true,
}))`
  padding: 13px 0 13px 0;
`;
