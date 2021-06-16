import styled from 'styled-components/native';
import Text from '~/components/Text';

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
  margin-bottom: 3px;
`;

export const Title = styled(Text).attrs({
  FONTSIZE13: true,
  POPPINS500: true,
})``;

export const Info = styled(Text).attrs({
  FONTSIZE13: true,
})``;
