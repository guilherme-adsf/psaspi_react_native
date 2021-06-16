import React, {useContext} from 'react';
import MainContext from '~/contexts/MainContext';
import {Modal, Title, Option, OptionText, Footer} from './styles';
import User from '~/api/User';
import {useNavigation} from '@react-navigation/core';

const ModalExportReport = ({modalizeRef, collectId, userId}) => {
  const {setLoading, closeLoadingModal} = useContext(MainContext);
  const navigation = useNavigation();

  return (
    <Modal
      ref={modalizeRef}
      scrollViewProps={{
        keyboardShouldPersistTaps: 'handled',
      }}>
      <Title>Isso vai deletar sua coleta, deseja continuar ?</Title>
      <Option
        onPress={() => {
          modalizeRef.current.close();
          setLoading(true);
          User.delete_collection({
            collectId,
            closeLoadingModal,
            navigation,
          });
        }}>
        <OptionText>Sim</OptionText>
      </Option>
      <Option
        onPress={() => {
          modalizeRef.current.close();
        }}>
        <OptionText>Não</OptionText>
      </Option>
      <Footer />
    </Modal>
  );
};

export default ModalExportReport;
