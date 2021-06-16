import React from 'react';
import MainContext from '~/contexts/MainContext';
import {
  KeyboardAvoidingView,
  StatusBarView,
  ScrollView,
  Container,
} from './styles';

const WrapperKeyboardAvoidingView = ({
  children,
  viewTopSide,
  marginHorizontal,
}) => {
  const {insets} = React.useContext(MainContext);

  return (
    <KeyboardAvoidingView>
      {viewTopSide && <StatusBarView insets={insets} />}
      <ScrollView
        contentContainerStyle={{marginHorizontal: marginHorizontal ? 20 : 0}}>
        <Container>{children}</Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default WrapperKeyboardAvoidingView;
