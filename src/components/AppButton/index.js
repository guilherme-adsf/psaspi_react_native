import React from 'react';
import {Keyboard, ActivityIndicator} from 'react-native';
import {ELECTRON_BLUE} from '~/theme/colors';
import {Container, Label, LoadingContainer} from './styles';

const AppButton = ({
  marginTop,
  marginBottom,
  title,
  onPress,
  loading = false,
  transparent = false,
}) => {
  return (
    <Container
      transparent={transparent}
      marginTop={marginTop}
      marginBottom={marginBottom}
      onPress={() => {
        Keyboard.dismiss();
        onPress();
      }}>
      {loading ? (
        <LoadingContainer>
          <ActivityIndicator size="large" color={ELECTRON_BLUE} />
        </LoadingContainer>
      ) : (
        <Label transparent={transparent}>{title}</Label>
      )}
    </Container>
  );
};

export default AppButton;
