import styled from 'styled-components/native';
import Text from '~/components/Text';
import {Modalize} from 'react-native-modalize';
import {ELECTRON_BLUE, SECONDARY_GREY} from '~/theme/colors';

export const Modal = styled(Modalize).attrs({
  adjustToContentHeight: true,
  modalStyle: {
    padding: 15,
    backgroundColor: SECONDARY_GREY,
  },
})``;

export const Title = styled(Text).attrs({
  FONTSIZE20: true,
})`
  text-align: center;
  margin-bottom: -10px;
`;

export const Footer = styled.View`
  margin-bottom: 15px;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${ELECTRON_BLUE};
  width: 90%;
  align-self: center;
  border-radius: 5px;
  padding: 8px 0px;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
`;

export const TitleButton = styled(Text).attrs({
  color: '#fff',
  FONTSIZE15: true,
})``;

export const InputDescription = styled(Text).attrs({
  FONTSIZE12: true,
})`
  margin-left: 5px;
  margin-top: ${(props) => props.marginTop ?? 4}px;
  margin-bottom: -5px;
`;
