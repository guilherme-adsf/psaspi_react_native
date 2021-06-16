import React from 'react';
import LottieView from 'lottie-react-native';
import {Modal, Container, Message} from './styles';

const Loading = ({loading, message}) => {
  return (
    <Modal visible={loading}>
      {message ? (
        <Container>
          <Message>{message}</Message>
        </Container>
      ) : (
        <LottieView
          source={require('~/assets/Loading.json')}
          autoPlay
          loop
          resizeMode="center"
        />
      )}
    </Modal>
  );
};

export default Loading;
