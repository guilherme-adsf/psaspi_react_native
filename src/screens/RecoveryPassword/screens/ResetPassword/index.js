import React, {useState, useContext} from 'react';
import WrapperKeyboardAvoidingView from '~/components/WrapperKeyboardAvoidingView';
import HeaderReturnNavigation from '~/components/HeaderReturnNavigation';
import {WelcomeText, Bold} from './styles';
import InputText from '~/components/InputText';
import AppButton from '~/components/AppButton';
import MainContext from '~/contexts/MainContext';
import {submit_form} from './helper';

const ResetPassword = ({navigation, route}) => {
  const {id} = route.params;
  const {setLoading, closeLoadingModal} = useContext(MainContext);
  const [formData, setFormData] = useState({
    password: '',
    confirm_password: '',
  });
  const [formErrors, setFormErrors] = useState({
    password: '',
    confirm_password: '',
  });

  return (
    <WrapperKeyboardAvoidingView viewTopSide marginHorizontal>
      <HeaderReturnNavigation route="Login" />
      <WelcomeText>
        Crie uma nova <Bold>senha</Bold>
      </WelcomeText>
      <WelcomeText>Seja bem vindo(a) a nossa</WelcomeText>
      <WelcomeText>plataforma, agora vamos</WelcomeText>
      <WelcomeText>criar sua senha.</WelcomeText>
      <InputText
        label="Senha"
        placeholder="Digite sua senha"
        value={formData.password}
        onChangeText={(text) =>
          setFormData((value) => ({...value, password: text}))
        }
        messageError={formErrors.password}
        autoCapitalize={'none'}
        secureTextEntry={true}
      />
      <InputText
        label="Confirme sua senha"
        placeholder="Digite sua senha novamente"
        value={formData.confirm_password}
        onChangeText={(text) =>
          setFormData((value) => ({...value, confirm_password: text}))
        }
        messageError={formErrors.confirm_password}
        autoCapitalize={'none'}
        secureTextEntry={true}
      />
      <AppButton
        title="Salvar"
        marginTop={35}
        onPress={() =>
          submit_form({
            formData,
            setFormErrors,
            setLoading,
            closeLoadingModal,
            navigation,
            id,
          })
        }
      />
    </WrapperKeyboardAvoidingView>
  );
};

export default ResetPassword;
