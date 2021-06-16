import React, {useState, useContext} from 'react';
import AppButton from '~/components/AppButton';
import HeaderReturnNavigation from '~/components/HeaderReturnNavigation';
import InputText from '~/components/InputText';
import WrapperKeyboardAvoidingView from '~/components/WrapperKeyboardAvoidingView';
import {submit_form} from './helper';
import {WelcomeText} from './styles';
import MainContext from '~/contexts/MainContext';

const CreateAccount = ({navigation}) => {
  const {setLoading, closeLoadingModal, setIsLogged, setUser} = useContext(
    MainContext,
  );
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    senha: '',
    confirme_senha: '',
  });
  const [formErrors, setFormErrors] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    senha: '',
    confirme_senha: '',
  });

  return (
    <WrapperKeyboardAvoidingView viewTopSide marginHorizontal>
      <HeaderReturnNavigation />
      <WelcomeText>
        Seja bem vindo a nossa plataforma, vamos criar sua conta.
      </WelcomeText>
      <InputText
        label="Nome"
        placeholder="Seu nome"
        onChangeText={(text) => setFormData((form) => ({...form, nome: text}))}
        value={formData.nome}
        autoCapitalize={'words'}
        messageError={formErrors.nome}
      />
      <InputText
        label="Sobrenome"
        placeholder="Seu sobrenome"
        onChangeText={(text) =>
          setFormData((form) => ({...form, sobrenome: text}))
        }
        value={formData.sobrenome}
        autoCapitalize={'words'}
        messageError={formErrors.sobrenome}
      />
      <InputText
        label="E-mail"
        placeholder="Digite seu e-mail"
        onChangeText={(text) => setFormData((form) => ({...form, email: text}))}
        value={formData.email}
        autoCapitalize={'none'}
        keyboardType={'email-address'}
        messageError={formErrors.email}
      />
      <InputText
        label="Senha"
        placeholder="Digite sua senha"
        onChangeText={(text) => setFormData((form) => ({...form, senha: text}))}
        autoCapitalize={'none'}
        value={formData.senha}
        messageError={formErrors.senha}
        secureTextEntry={true}
      />
      <InputText
        label="Confirme sua senha"
        placeholder="Digite sua senha novamente"
        onChangeText={(text) =>
          setFormData((form) => ({...form, confirme_senha: text}))
        }
        autoCapitalize={'none'}
        value={formData.confirme_senha}
        messageError={formErrors.confirme_senha}
        secureTextEntry={true}
      />
      <AppButton
        title="Criar conta"
        marginTop={35}
        marginBottom={10}
        onPress={() =>
          submit_form({
            formData,
            setFormErrors,
            setLoading,
            closeLoadingModal,
            setIsLogged,
            setUser,
          })
        }
      />
    </WrapperKeyboardAvoidingView>
  );
};

export default CreateAccount;
