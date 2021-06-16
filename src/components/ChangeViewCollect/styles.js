import styled from 'styled-components/native';
import {ELECTRON_BLUE} from '~/theme/colors';
import {FONT_RALEWAY_700, POPPINS_500} from '~/theme/text-styles';
import {get_percent_width} from '~/utils/get_dimensions_window';

export const Container = styled.View`
  flex-direction: row;
  align-self: center;
  margin-top: 10px;
`;

export const LeftView = styled.View`
  background-color: ${(props) =>
    props.isSelected ? ELECTRON_BLUE : 'transparent'};
  padding: 2px 0px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  justify-content: center;
  align-items: center;
  border-color: ${ELECTRON_BLUE};
  border-width: 1px;
  width: ${get_percent_width('40%')};
`;

export const RightView = styled.View`
  background-color: ${(props) =>
    props.isSelected ? ELECTRON_BLUE : 'transparent'};
  padding: 2px 0px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  justify-content: center;
  align-items: center;
  border-color: ${ELECTRON_BLUE};
  border-width: 1px;
  width: ${get_percent_width('45%')};
`;

export const Text = styled.Text`
  color: ${(props) => (props.isSelected ? '#fff' : ELECTRON_BLUE)};
  font-family: ${POPPINS_500};
`;

export const Touchable = styled.TouchableOpacity``;
