import styled from 'styled-components/native';
import {
  get_percent_width,
  get_percent_height,
} from '~/utils/get_dimensions_window';

export const ContainerReturnImage = styled.TouchableOpacity`
  padding: 8px 8px 8px 0;
  align-self: flex-start;
`;

export const ReturnImage = styled.Image.attrs({
  source: require('~/assets/images/ArrowReturn.png'),
})`
  width: ${get_percent_width('7%')};
  height: ${get_percent_height('6%')};
  resize-mode: contain;
`;
