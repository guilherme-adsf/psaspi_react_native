import styled from 'styled-components/native';
import Text from '~/components/Text';
import {ELECTRON_BLUE} from '~/theme/colors';

export const Touchable = styled.TouchableOpacity`
  width: 95%;
  align-self: center;
  margin-top: 10px;
`;

export const Card = styled.View`
  padding: 10px 15px;
  background-color: #fff;
  border-radius: 5px;
  width: 95%;
  align-self: center;
  margin-top: 10px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: ${(props) => props.alignItems ?? 'flex-start'};
  margin-bottom: 3px;
`;

export const Title = styled(Text).attrs({
  FONTSIZE13: true,
  POPPINS500: true,
})``;

export const Info = styled(Text).attrs({
  FONTSIZE13: true,
})``;

export const StatusContainer = styled.View`
  background-color: ${({status}) =>
    status === 'Em Andamento'
      ? '#07b1c4'
      : status === 'Finalizada'
      ? '#1dd372'
      : '#ff7b00'};
  border-radius: 5px;
  padding: 0 8px;
  justify-content: center;
`;

export const StatusText = styled(Text).attrs({
  FONTSIZE12: true,
  color: '#fff',
})``;

export const TouchableResult = styled.TouchableOpacity`
  background-color: ${ELECTRON_BLUE};
  align-items: center;
  justify-content: center;
  padding: 2px 10px;
  border-radius: 5px;
`;

export const ResultText = styled(Text).attrs({
  FONTSIZE12: true,
  color: '#fff',
})``;
