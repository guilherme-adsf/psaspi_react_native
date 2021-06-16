import styled from 'styled-components/native';
import {Animated, Platform} from 'react-native';
import {
  get_percent_width,
  get_percent_height,
} from '~/utils/get_dimensions_window';
import {PRIMARY_GREY, ELECTRON_BLUE} from '~/theme/colors';
import Text from '~/components/Text';
import {FONT_RALEWAY_700, FONT_SIZE_25PX} from '~/theme/text-styles';

export const ImageBackground = styled(Animated.Image).attrs({
  source: require('~/assets/images/Background.jpg'),
})`
  resize-mode: cover;
  width: 100%;
  height: 100%;
`;

export const ContainerText = styled(Animated.View)`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  align-items: center;
`;

export const LoginText = styled.Text`
  font-size: ${FONT_SIZE_25PX};
  color: #fff;
  font-family: ${FONT_RALEWAY_700};
  justify-content: center;
  align-items: center;
  padding-top: ${(props) => props.marginTop + 3}px;
`;

export const FormLogin = styled(Animated.View)`
  border-top-right-radius: 20px;
  background-color: ${PRIMARY_GREY};
  width: ${get_percent_width('100%')};
  height: ${get_percent_height('52%')};
  padding: 0px 20px;
`;

export const WrapperText = styled.View`
  flex-direction: row;
  width: 95%;
  align-self: center;
  align-items: center;
  margin-top: 5px;
  ${({alignCenter}) => {
    if (alignCenter) {
      return 'justify-content: center';
    }
  }}
`;

export const OptionText = styled(Text).attrs({
  POPPINS400: true,
  FONTSIZE13: true,
})`
  text-align-vertical: center;
`;

export const RedirectToDestiny = styled.TouchableOpacity`
  align-items: center;
  text-align-vertical: center;
`;

export const ClickHere = styled(Text).attrs({
  POPPINS400: true,
  color: ELECTRON_BLUE,
  FONTSIZE13: true,
})`
  flex: 1;
`;
