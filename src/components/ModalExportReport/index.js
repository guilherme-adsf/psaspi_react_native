import React, {useContext} from 'react';
import MainContext from '~/contexts/MainContext';
import {Modal, Title, Option, OptionText, Footer} from './styles';
import User from '~/api/User';

const ModalExportReport = ({modalizeRef, collectId, userId}) => {
  const {setLoading, closeLoadingModal} = useContext(MainContext);

  return (
    <Modal
      ref={modalizeRef}
      scrollViewProps={{
        keyboardShouldPersistTaps: 'handled',
      }}>
      <Title>Em qual formato você deseja exportar o relatório ?</Title>
      <Option
        onPress={() => {
          modalizeRef.current.close();
          setLoading(true);
          User.export_report({
            collectId,
            userId,
            closeLoadingModal,
            choice: 'PDF',
          });
        }}>
        <OptionText>PDF</OptionText>
      </Option>
      <Option
        onPress={() => {
          modalizeRef.current.close();
          setLoading(true);
          User.export_report({
            collectId,
            userId,
            closeLoadingModal,
            choice: 'DOCX',
          });
        }}>
        <OptionText>DOCX</OptionText>
      </Option>
      <Footer />
    </Modal>
  );
};

export default ModalExportReport;
