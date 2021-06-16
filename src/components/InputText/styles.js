import styled from 'styled-components/native';
import {
  get_percent_height,
  get_percent_width,
} from '~/utils/get_dimensions_window';
import {POPPINS_400, FONT_SIZE_13PX} from '~/theme/text-styles';
import {COLOR_INPUT_GRAY, COLOR_MESSAGE_ERROR, WHITE_30} from '~/theme/colors';
import Text from '~/components/Text';

export const Container = styled.View`
  width: 100%;
  align-self: center;
  margin-top: ${(props) => (props.isSearchInput ? 0 : 20)}px;
`;

export const InputContainer = styled.View``;

export const Input = styled.TextInput`
  background-color: ${(props) => (props.disabled ? '#ffffff' : WHITE_30)};
  border-radius: 10px;
  padding-right: ${({isPassword}) => (isPassword ? '40px' : '20px')};
  color: ${COLOR_INPUT_GRAY};
  font-family: ${POPPINS_400};
  text-align-vertical: center;
  padding: 11px 20px;
  font-size: ${FONT_SIZE_13PX};
`;

export const Label = styled(Text).attrs({
  FONTSIZE13: true,
  POPPINS500: true,
})`
  margin-left: 10px;
  margin-bottom: 5px;
`;

export const ContainerImage = styled.TouchableOpacity`
  position: absolute;
  top: 0px;
  right: 8px;
  bottom: 0px;
  justify-content: center;
`;

export const Image = styled.Image.attrs((props) => ({
  source: props.isPassword
    ? require('~/assets/images/password_eye.png')
    : require('~/assets/images/Search.png'),
}))`
  width: ${get_percent_width('5%')};
  height: ${get_percent_height('3%')};
  resize-mode: contain;
`;

export const MessageError = styled(Text).attrs({
  color: COLOR_MESSAGE_ERROR,
  FONTSIZE12: true,
})`
  margin-left: 5px;
  margin-top: 2px;
  margin-bottom: -5px;
`;
