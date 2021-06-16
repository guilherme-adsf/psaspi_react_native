import styled from 'styled-components/native';
import Text from '~/components/Text';

export const Container = styled.View`
  width: 95%;
  background-color: #fff;
  align-self: center;
  border-radius: 8px;
  margin: ${(props) =>
    `${props.marginTop}px ${props.marginHorizontal}px ${props.marginBottom}px ${props.marginHorizontal}px `};
  padding: 0 5px;
  flex-direction: row;
  align-items: center;
`;

export const HashtagImage = styled.Image.attrs({
  source: require('~/assets/images/yellow-hashtag.jpg'),
})`
  resize-mode: cover;
  width: 32%;
  height: 80%;
  margin-right: 5px;
`;

export const Message = styled(Text).attrs({
  FONTSIZE13: true,
  POPPINS500: true,
})`
  width: 66%;
  text-align: justify;
  text-align-vertical: center;
`;
