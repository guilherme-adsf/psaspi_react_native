import React, {useState, useContext} from 'react';
import WrapperKeyboardAvoidingView from '~/components/WrapperKeyboardAvoidingView';
import HeaderReturnNavigation from '~/components/HeaderReturnNavigation';
import {WelcomeText, Bold} from './styles';
import InputText from '~/components/InputText';
import AppButton from '~/components/AppButton';
import MainContext from '~/contexts/MainContext';
import User from '~/api/User';

const RecoveryPassword = ({navigation}) => {
  const {setLoading, closeLoadingModal} = useContext(MainContext);
  const [email, setEmail] = useState('');
  const [emailMessageError, setEmailMessageError] = useState('');

  const submit = async () => {
    if (!email) {
      setEmailMessageError('* Campo obrigatório');
      return;
    }
    if (!email.includes('@')) {
      setEmailMessageError('* Digite um e-mail válido.');
      return;
    }
    setEmailMessageError('');
    setLoading(true);
    User.forgotpassword({
      email,
      closeLoadingModal,
      navigation,
      setLoading,
    });
  };

  return (
    <WrapperKeyboardAvoidingView viewTopSide marginHorizontal>
      <HeaderReturnNavigation />
      <WelcomeText marginTop={10}>
        Esqueçeu sua <Bold>senha</Bold>?
      </WelcomeText>
      <WelcomeText marginBottom={8}>
        Digite o endereço de e-mail e enviaremos um link para redefinir sua
        senha.
      </WelcomeText>
      <InputText
        label="E-mail"
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={(text) => setEmail(text)}
        messageError={emailMessageError}
        autoCapitalize={'none'}
        keyboardType={'email-address'}
      />
      <AppButton title="Recuperar senha" marginTop={45} onPress={submit} />
    </WrapperKeyboardAvoidingView>
  );
};

export default RecoveryPassword;
