import styled from 'styled-components/native';
import Text from '~/components/Text';
import {ELECTRON_BLUE} from '~/theme/colors';
import {
  get_percent_height,
  get_percent_width,
} from '~/utils/get_dimensions_window';

export const Container = styled.View`
  flex: 1;
  background-color: #f1f1f1;
`;

export const AvatarContainer = styled.View`
  width: ${get_percent_width('26%')};
  height: ${get_percent_height('13%')};
  border-radius: ${get_percent_height('13%')};
  background-color: #fff;
  align-self: center;
  margin-top: 15px;
  justify-content: center;
  align-items: center;
`;

export const AvatarTitle = styled(Text).attrs({
  FONTSIZE30: true,
})`
  color: ${ELECTRON_BLUE};
`;

export const Form = styled.View`
  padding: 0 15px;
`;
