import styled from 'styled-components/native';
import Text from '~/components/Text';
import {Modalize} from 'react-native-modalize';
import {SECONDARY_GREY} from '~/theme/colors';

export const Modal = styled(Modalize).attrs({
  adjustToContentHeight: true,
  modalStyle: {
    padding: 15,
    backgroundColor: SECONDARY_GREY,
  },
})``;

export const Title = styled(Text).attrs({
  FONTSIZE15: true,
})`
  text-align: justify;
  margin-bottom: 0px;
`;

export const Option = styled.TouchableOpacity`
  background-color: #fff;
  width: 100%;
  align-self: center;
  border-radius: 5px;
  padding: 18px 0px;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
`;

export const OptionText = styled(Text).attrs({
  FONTSIZE15: true,
})`
  text-align: justify;
  margin-bottom: -10px;
`;

export const Footer = styled.View`
  margin-bottom: 20px;
`;
