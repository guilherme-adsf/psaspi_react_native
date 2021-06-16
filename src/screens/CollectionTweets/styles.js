import styled from 'styled-components/native';
import Text from '~/components/Text';
import {ELECTRON_BLUE, ERROR_COLOR} from '~/theme/colors';

export const Container = styled.View`
  flex: 1;
`;

export const Scroll = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {paddingBottom: 5},
})`
  margin-top: 5px;
`;

export const TouchableDeleteCollection = styled.TouchableOpacity`
  background-color: ${ERROR_COLOR};
  padding: 5px 0px;
  align-self: flex-end;
  margin-right: 10px;
  border-radius: 5px;
  width: 30%;
  align-items: center;
`;

export const TouchableExportCSV = styled.TouchableOpacity`
  background-color: ${ELECTRON_BLUE};
  padding: 5px 0px;
  align-self: flex-end;
  margin-right: 10px;
  border-radius: 5px;
  width: 30%;
  align-items: center;
`;

export const TouchableText = styled(Text).attrs({
  FONTSIZE12: true,
  color: '#fff',
})``;

export const Row = styled.View`
  flex-direction: row;
  justify-content: ${(props) => props.alignItems ?? 'space-between'};
  margin-top: 5px;
  padding-left: 10px;
  align-items: center;
  margin-bottom: ${(props) => props.marginBottom ?? 0}px;
`;

export const Footer = styled.View`
  padding: 10px 15px;
  background-color: #fff;
  border-radius: 5px;
  width: 95%;
  align-self: center;
  margin-top: 10px;
`;

export const FooterText = styled(Text).attrs({
  FONTSIZE12: true,
})`
  text-align: justify;
`;

export const AmountContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: 5px;
`;

export const Amount = styled(Text).attrs({
  FONTSIZE13: true,
  POPPINS700: true,
})``;

export const AmountText = styled(Text).attrs({
  FONTSIZE15: true,
  POPPINS400: true,
})``;

export const Col = styled.View``;
