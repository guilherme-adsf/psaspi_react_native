import React from 'react';
import {Card, Row, Title, Info} from './styles';

const CollectCard = ({tweet}) => {
  return (
    <Card>
      <Row>
        <Title>Data da Publicação: </Title>
        <Info>{tweet.timeStamp.replace(/-/g, '/')}</Info>
      </Row>
      <Row>
        <Title>Sentimento: </Title>
        <Info>{tweet.sentiment}</Info>
      </Row>
      <Row>
        <Title>Número de Curtidas: </Title>
        <Info>{tweet.likes}</Info>
      </Row>
      <Row>
        <Title>Número de Retweets: </Title>
        <Info>{tweet.retweets}</Info>
      </Row>
      <Row>
        <Title>Número de Retweets com Comentário: </Title>
        <Info>{tweet.retweetsWithComments}</Info>
      </Row>
      <Row>
        <Title>Número de Comentários: </Title>
        <Info>{tweet.comments ?? 0}</Info>
      </Row>
      <Row>
        <Title>Sequência Apurada: </Title>
        <Info>{tweet.gspSequence}</Info>
      </Row>
    </Card>
  );
};

export default CollectCard;
