import React, {useContext, useEffect, useState, useRef} from 'react';
import User from '~/api/User';
import Header from '~/components/Header';
import ModalExportReport from '~/components/ModalExportReport';
import ModalDeleteCollection from '~/components/ModalDeleteCollection';
import MainContext from '~/contexts/MainContext';
import {
  Container,
  Scroll,
  TouchableExportCSV,
  TouchableText,
  Row,
  Footer,
  FooterText,
  AmountContainer,
  Amount,
  AmountText,
  Col,
  TouchableDeleteCollection,
} from './styles';
import CollectTweetCard from './components/CollectTweetCard';
import CardWarningMessage from '~/components/CardWarningMessage';

const CollectionTweets = ({route, navigation}) => {
  const refModalExportReport = useRef(null);
  const refModalDeleteCollection = useRef(null);
  const scrollRef = useRef(null);
  const {loading, setLoading, closeLoadingModal, user} = useContext(
    MainContext,
  );
  const [infoRequest, setInfoRequest] = useState({});
  const [tweets, setTweets] = useState([]);
  const [finishScroll, setFinishScroll] = useState(false);
  const {collect} = route.params;

  useEffect(() => {
    fetch_tweets({
      url: `/gettweetsofcollect/${collect.id}`,
      finishLoading: setLoading,
    });
  }, []);

  const fetch_tweets = ({url, finishLoading}) => {
    User.get_tweets_collect({
      url,
      setTweets,
      setLoading: finishLoading,
      setInfoRequest,
    });

    if (!!collect.pathDocx && !!collect.pathPdf) {
      User.view_collection({
        collectId: collect.id,
      });
    }
  };

  return (
    <Container>
      {console.log(collect)}
      <Header withBack={true} title="Tweets da Coleta" />
      {/* <ModalExportReport
        modalizeRef={refModalExportReport}
        collectId={collect.id}
        userId={collect.userId}
      /> */}
      <ModalDeleteCollection
        modalizeRef={refModalDeleteCollection}
        collectId={collect.id}
      />
      {loading ? (
        <></>
      ) : (
        <>
          {((!!collect.pathDocx && !!collect.pathPdf) || user.id === 2) && (
            <Row alignItems="flex-end" marginBottom={-8}>
              <TouchableDeleteCollection
                onPress={() => refModalDeleteCollection.current.open()}>
                <TouchableText>Excluir Coleta</TouchableText>
              </TouchableDeleteCollection>
            </Row>
          )}
          <Row>
            <AmountContainer>
              <Amount>Perfil: </Amount>
              <AmountText>@{collect.profileId}</AmountText>
            </AmountContainer>
          </Row>
          <Row>
            <AmountContainer>
              <Amount>Tweets Coletados: </Amount>
              <AmountText>{infoRequest.count}</AmountText>
            </AmountContainer>
            {collect.status === 'Interrompida' && (
              <TouchableExportCSV
                onPress={() => {
                  setLoading(true);
                  User.collect({
                    start: tweets.length,
                    numberOfTweets: collect.totalTweets,
                    profileId: collect.profileId,
                    userId: collect.userId,
                    closeLoadingModal,
                    id: collect.id,
                    callback: () => {
                      navigation.goBack();
                    },
                  });
                }}>
                <TouchableText>Continuar Coleta</TouchableText>
              </TouchableExportCSV>
            )}
          </Row>
          <Row>
            <AmountContainer>
              <Amount>Número de Seguidores: </Amount>
              <AmountText>{collect.followers}</AmountText>
            </AmountContainer>
          </Row>
          {collect.status === 'Finalizada' && (
            <Col>
              <Row>
                <Amount>Dados Brutos (CSV) </Amount>
                <TouchableExportCSV
                  onPress={() => {
                    setLoading(true);
                    User.export_csv({
                      collectId: collect.id,
                      userId: collect.userId,
                      closeLoadingModal,
                    });
                  }}>
                  <TouchableText>Exportar</TouchableText>
                </TouchableExportCSV>
              </Row>
              {!!collect.pathDocx && (
                <Row>
                  <Amount>Exportar Apuração (DOCX)</Amount>
                  <TouchableExportCSV
                    onPress={() => {
                      // refModalExportReport.current.open();
                      setLoading(true);
                      User.export_report({
                        collectId: collect.id,
                        userId: collect.userId,
                        closeLoadingModal,
                        choice: 'DOCX',
                      });
                    }}>
                    <TouchableText>Exportar</TouchableText>
                  </TouchableExportCSV>
                </Row>
              )}
              {!!collect.pathPdf && (
                <Row>
                  <Amount>Exportar Apuração (PDF)</Amount>
                  <TouchableExportCSV
                    onPress={() => {
                      // refModalExportReport.current.open();
                      setLoading(true);
                      User.export_report({
                        collectId: collect.id,
                        userId: collect.userId,
                        closeLoadingModal,
                        choice: 'PDF',
                      });
                    }}>
                    <TouchableText>Exportar</TouchableText>
                  </TouchableExportCSV>
                </Row>
              )}
              {!!collect.pathDocx && !!collect.pathPdf && (
                <Row>
                  <Amount>Exportar Tudo (CSV,DOCX,PDF)</Amount>
                  <TouchableExportCSV
                    onPress={() => {
                      // refModalExportReport.current.open();
                      setLoading(true);
                      User.export_all_reports({
                        collectId: collect.id,
                        userId: collect.userId,
                        closeLoadingModal,
                      });
                    }}>
                    <TouchableText>Exportar</TouchableText>
                  </TouchableExportCSV>
                </Row>
              )}
            </Col>
          )}
          {(!collect.status_collect_retweets_with_comment ||
            collect.status_collect_retweets_with_comment ===
              'Em Andamento') && (
            <CardWarningMessage
              marginTop={10}
              marginBottom={0}
              message='Sua coleta está em andamento, é importante que você saiba que de inicio os campos "Número de Retweets com Comentário" e "Número de Comentários" podem estar com o valor de 0 pois ambos são coletados em tarefas separadas.'
            />
          )}
          <Scroll
            ref={scrollRef}
            data={tweets}
            renderItem={({item}) => <CollectTweetCard tweet={item} />}
            onEndReached={() => {
              // console.log(infoRequest.count, tweets.length);
              // console.log(typeof infoRequest.count, typeof tweets.length);
              // if (tweets.length < infoRequest.count) {
              //   setLoadigMoreData(true);
              //   fetch_tweets({
              //     url: infoRequest.nextRequest,
              //     finishLoading: setLoadigMoreData,
              //   });
              // }
              setFinishScroll(true);
            }}
            onEndReachedThreshold={0.1}
            ListFooterComponent={
              <>
                {finishScroll && (
                  <Footer>
                    {collect.status === 'Finalizado' &&
                    collect.status_collect_replies === 'Finalizado' ? (
                      <>
                        <FooterText>
                          Sua coleta foi finalizada, para visualizar todos os
                          tweets exporte os dados clicando no botão "Exportar
                          CSV"
                        </FooterText>
                        <FooterText>
                          * Nem todos os tweets são indexados, talvez a
                          quantidade final de tweets pode ser menor do que o
                          esperado.
                        </FooterText>
                      </>
                    ) : (
                      <FooterText>
                        Sua coleta ainda está em andamento, após a coleta ser
                        finalizada você poderá visualizar todos os tweets da sua
                        coleta a exportando em formato CSV ou exportar a
                        apuração em DOCX ou PDF.
                      </FooterText>
                    )}
                  </Footer>
                )}
              </>
            }
            keyExtractor={(item) => `key-${item.id}`}
          />
        </>
      )}
    </Container>
  );
};

export default CollectionTweets;
