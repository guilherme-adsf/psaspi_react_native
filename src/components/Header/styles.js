import styled from 'styled-components/native';
import {ELECTRON_BLUE} from '~/theme/colors';
import {FONT_SIZE_20PX, POPPINS_400} from '~/theme/text-styles';
import {
  get_percent_height,
  get_percent_width,
} from '~/utils/get_dimensions_window';

export const Main = styled.View``;

export const Container = styled.View`
  background-color: ${ELECTRON_BLUE};
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: ${({paddingTop}) => paddingTop}px;
  padding-bottom: 8px;
`;

export const LeftContainer = styled.View`
  flex: 0.5;
`;

export const CenterContainer = styled.View`
  flex: 2;
  align-items: center;
  justify-content: center;
`;

export const RightContainer = styled.View`
  flex: 0.5;
`;

export const Title = styled.Text`
  font-size: ${FONT_SIZE_20PX};
  font-family: ${POPPINS_400};
  color: #fff;
  text-align: center;
`;

export const LogoutContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const Logout = styled.Image.attrs({
  source: require('~/assets/images/logout.png'),
})`
  height: ${get_percent_height('3.5%')};
  width: ${get_percent_width('7%')};
  resize-mode: contain;
`;

export const ReturnContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const Return = styled.Image.attrs({
  source: require('~/assets/images/return.png'),
})`
  height: ${get_percent_height('3.5%')};
  width: ${get_percent_width('7%')};
  resize-mode: contain;
`;
