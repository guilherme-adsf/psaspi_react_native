import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Scroll = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {paddingBottom: 10},
})``;
