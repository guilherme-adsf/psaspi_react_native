import styled from 'styled-components/native';
import {Platform} from 'react-native';
import {PRIMARY_GREY} from '~/theme/colors';

export const KeyboardAvoidingView = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.OS === 'ios' ? 'padding' : null,
})`
  flex: 1;
`;

export const StatusBarView = styled.View`
  width: 100%;
  height: ${({insets}) => insets.top}px;
  background-color: transparent;
`;

export const ScrollView = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  keyboardShouldPersistTaps: 'handled',
})``;

export const Container = styled.View`
  flex: 1;
  background-color: ${PRIMARY_GREY};
  margin-bottom: 10px;
`;
