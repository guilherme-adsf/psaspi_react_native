import React, {useState} from 'react';
import User from '~/api/User';
import InputText from '../InputText';
import {
  Modal,
  Title,
  Footer,
  Button,
  TitleButton,
  InputDescription,
} from './styles';

const ModalNewCollect = ({
  modalizeRef,
  user,
  setLoading,
  closeLoadingModal,
  setForceUpdate,
}) => {
  const [profileId, setProfileId] = useState({
    value: '',
    messageError: '',
  });
  const [numberOfTweets, setNumberOfTweets] = useState({
    value: 0,
    messageError: '',
  });

  const clean_messages_error = () => {
    setProfileId((obj) => ({...obj, messageError: ''}));
    setNumberOfTweets((obj) => ({...obj, messageError: ''}));
  };

  const clean_inputs = () => {
    setProfileId({value: '', messageError: ''});
    setNumberOfTweets({value: 0, messageError: ''});
  };

  return (
    <Modal
      ref={modalizeRef}
      scrollViewProps={{
        keyboardShouldPersistTaps: 'handled',
      }}>
      <Title>Nova Coleta</Title>
      <InputText
        placeholder="ID do Perfil"
        value={profileId.value}
        onChangeText={(value) => setProfileId((obj) => ({...obj, value}))}
        messageError={profileId.messageError}
        autoCapitalize="none"
      />
      <InputDescription>
        * Identificador único de cada perfil, possuindo um @ em seu inicio
      </InputDescription>
      <InputText
        placeholder="Quantidade de Tweets"
        keyboardType="number-pad"
        maxLength={4}
        value={numberOfTweets.value}
        onChangeText={(value) => setNumberOfTweets((obj) => ({...obj, value}))}
        messageError={numberOfTweets.messageError}
      />
      <InputDescription>* Quantidade máxima de 2000 tweets</InputDescription>
      <InputDescription marginTop={20}>
        * A coleta de tweets está limitada a um número máximo de 2000 tweets
        mais recentes, já a coleta de comentários presentes nos tweets está
        limitada a até 6000 comentários, sendo que ambos os valores podem variar
        pois nem tudo é indexado pela API do Twitter.
      </InputDescription>
      <Button
        onPress={() => {
          clean_messages_error();
          if (!profileId.value || !numberOfTweets.value) {
            if (!profileId.value) {
              setProfileId((obj) => ({
                ...obj,
                messageError: '* Preencha este campo.',
              }));
            }
            if (!numberOfTweets.value) {
              setNumberOfTweets((obj) => ({
                ...obj,
                messageError: '* Preencha este campo.',
              }));
            }
            return;
          }

          if (numberOfTweets.value > 2000) {
            setNumberOfTweets((obj) => ({
              ...obj,
              messageError: '* Valor máximo de 2000 tweets.',
            }));
            return;
          }

          setLoading(true);

          User.collect({
            numberOfTweets: numberOfTweets.value,
            profileId: profileId.value.replace('@', '').trim(),
            userId: user.id,
            callback: () => {
              setForceUpdate(true);
              clean_inputs();
              modalizeRef.current.close();
            },
            closeLoadingModal,
          });
        }}>
        <TitleButton>Solicitar Coleta</TitleButton>
      </Button>
      <Footer />
    </Modal>
  );
};

export default ModalNewCollect;
