import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {format_date} from '~/utils/date';
import {
  Card,
  Row,
  Title,
  Info,
  StatusContainer,
  StatusText,
  TouchableResult,
  ResultText,
} from './styles';

const CollectCard = ({collect, setLoading}) => {
  const navigation = useNavigation();
  const collect_body = {
    ...collect,
    status_collect_retweets_with_comment:
      collect.status !== 'Finalizada'
        ? collect.status
        : !collect.pathDocx && !collect.pathPdf
        ? 'Em Andamento'
        : collect.status,
  };

  return (
    <Card>
      <Row>
        <Title>Perfil da Coleta: </Title>
        <Info>{collect.profileId}</Info>
      </Row>
      <Row>
        <Title>Data da Coleta: </Title>
        <Info>{format_date(collect.referenceDate)}</Info>
      </Row>
      <Row>
        <Title>Quantidade de Tweets da Coleta: </Title>
        <Info>{collect.totalTweets}</Info>
      </Row>
      <Row alignItems="space-between">
        <Row>
          <Title>Status: </Title>
          <StatusContainer
            status={collect_body.status_collect_retweets_with_comment}>
            <StatusText>
              {collect_body.status_collect_retweets_with_comment}
            </StatusText>
          </StatusContainer>
        </Row>
        <Row>
          <TouchableResult
            onPress={() => {
              setLoading(true);
              navigation.navigate('CollectionTweets', {collect});
            }}>
            <ResultText>Visualizar Resultado</ResultText>
          </TouchableResult>
        </Row>
      </Row>
    </Card>
  );
};

export default CollectCard;
