import React, {useEffect, useState, useContext} from 'react';
import AppButton from '~/components/AppButton';
import Header from '~/components/Header';
import InputText from '~/components/InputText';
import WrapperKeyboardAvoidingView from '~/components/WrapperKeyboardAvoidingView';
import {POPPINS_400} from '~/theme/text-styles';
import {AvatarContainer, AvatarTitle, Form} from './styles';
import {submit_form} from './helper';
import MainContext from '~/contexts/MainContext';

const UserData = ({navigation}) => {
  const {user, setLoading, closeLoadingModal, setUser} = useContext(
    MainContext,
  );
  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    senha: '',
    confirme_senha: '',
  });

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setFormData({
        id: user.id,
        nome: user.firstName,
        sobrenome: user.lastName,
        email: user.email,
        senha: user.password,
        confirme_senha: user.password,
      });
    });

    return unsubscribe;
  }, [user]);

  return (
    <WrapperKeyboardAvoidingView>
      <Header title="Dados do Usuário" />
      <AvatarContainer>
        <AvatarTitle>GA</AvatarTitle>
      </AvatarContainer>
      <Form>
        <InputText
          label="Nome"
          placeholder="Seu nome"
          onChangeText={(text) =>
            setFormData((form) => ({...form, nome: text}))
          }
          value={formData.nome}
          autoCapitalize={'words'}
          messageError={formErrors.nome}
          allowFontScaling={false}
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
          onChangeText={(text) =>
            setFormData((form) => ({...form, email: text}))
          }
          value={formData.email}
          autoCapitalize={'none'}
          keyboardType={'email-address'}
          messageError={formErrors.email}
        />
        <InputText
          label="Senha"
          placeholder="Digite sua senha"
          onChangeText={(text) =>
            setFormData((form) => ({...form, senha: text}))
          }
          autoCapitalize={'none'}
          value={formData.senha}
          messageError={formErrors.senha}
          secureTextEntry={true}
          style={{
            fontFamily: POPPINS_400,
          }}
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
          style={{
            fontFamily: POPPINS_400,
          }}
        />
        <AppButton
          title="Salvar"
          marginTop={30}
          marginBottom={10}
          transparent
          onPress={() => {
            submit_form({
              formData,
              setFormErrors,
              setLoading,
              navigation,
              closeLoadingModal,
              setUser,
            });
          }}
        />
      </Form>
    </WrapperKeyboardAvoidingView>
  );
};

export default UserData;
