import styled from 'styled-components/native';
import {PRIMARY_GREY} from '~/theme/colors';
import {FONT_POPPINS_500, FONT_SIZE_20PX} from '~/theme/text-styles';
import {COLOR_LIGHT_BLACK} from '~/theme/colors';
import {get_percent_width} from '~/utils/get_dimensions_window';
import Text from '~/components/Text';

export const Modal = styled.Modal.attrs({
  statusBarTranslucent: true,
  animationType: 'slide',
})``;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${PRIMARY_GREY};
`;

export const Message = styled(Text).attrs({
  FONTSIZE20: true,
  POPPINS500: true,
})`
  text-align: center;
  width: ${get_percent_width('60%')};
`;
