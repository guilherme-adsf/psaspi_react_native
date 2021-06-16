import React, {useState, useEffect, useContext} from 'react';
import {Animated, useWindowDimensions, Easing} from 'react-native';
import {heightPercentageToDP as hdp} from 'react-native-responsive-screen';
import {
  ImageBackground,
  FormLogin,
  WrapperText,
  RedirectToDestiny,
  OptionText,
  ClickHere,
  ContainerText,
  LoginText,
} from './styles';
import AppButton from '~/components/AppButton';
import WrapperKeyboardAvoidingView from '~/components/WrapperKeyboardAvoidingView';
import InputText from '~/components/InputText';
import {POPPINS_400} from '~/theme/text-styles';
import * as SplashScreen from 'expo-splash-screen';
import User from '~/api/User';
import MainContext from '~/contexts/MainContext';

const Login = ({navigation}) => {
  const {height} = useWindowDimensions();
  const {setIsLogged, setUser, insets} = useContext(MainContext);
  const [loading, setLoading] = useState(false);
  const [resizeImageBackground] = useState(new Animated.Value(height));
  const [opacityFormLogin] = useState(new Animated.Value(0));
  const [opacityLoginText] = useState(new Animated.Value(0));
  const [email, setEmail] = useState({
    value: '',
    messageError: '',
  });
  const [password, setPassword] = useState({
    value: '',
    messageError: '',
  });

  const AnimatedImageBackground = {
    height: resizeImageBackground,
  };

  const AnimatedFormLogin = {
    marginTop: opacityFormLogin,
  };

  const AnimatedLoginText = {
    opacity: opacityLoginText,
  };

  const resetMessagesErrors = () => {
    setEmail((obj) => ({
      ...obj,
      messageError: '',
    }));
    setPassword((obj) => ({
      ...obj,
      messageError: '',
    }));
  };

  useEffect(() => {
    SplashScreen.hideAsync();
    Animated.sequence([
      Animated.parallel([
        Animated.timing(resizeImageBackground, {
          toValue: hdp('60%'),
          duration: 2500,
          easing: Easing.back(),
          useNativeDriver: false,
        }),
        Animated.timing(opacityFormLogin, {
          toValue: -hdp('8%'),
          duration: 2500,
          useNativeDriver: false,
        }),
      ]),
      Animated.timing(opacityLoginText, {
        toValue: 1,
        useNativeDriver: false,
      }),
    ]).start();
  }, []);

  return (
    <WrapperKeyboardAvoidingView>
      <ImageBackground style={AnimatedImageBackground} />
      <ContainerText style={AnimatedLoginText}>
        <LoginText marginTop={insets.top}>Coletor de dados PSASPI</LoginText>
      </ContainerText>
      <FormLogin style={AnimatedFormLogin}>
        <InputText
          label="E-mail"
          placeholder="Digite seu e-mail"
          value={email.value}
          onChangeText={(text) =>
            setEmail((obj) => ({...obj, value: text.trim()}))
          }
          messageError={email.messageError}
          autoCapitalize={'none'}
          keyboardType={'email-address'}
        />
        <InputText
          label="Senha"
          placeholder="Digite sua senha"
          isPassword
          value={password.value}
          onChangeText={(text) => setPassword((obj) => ({...obj, value: text}))}
          messageError={password.messageError}
          style={{
            fontFamily: POPPINS_400,
          }}
        />
        <WrapperText>
          <OptionText>Esqueçeu sua senha,</OptionText>
          <RedirectToDestiny
            onPress={() => navigation.navigate('RecoveryPassword')}>
            <ClickHere> clique aqui.</ClickHere>
          </RedirectToDestiny>
        </WrapperText>
        <AppButton
          title="Entrar"
          marginTop={35}
          marginBottom={10}
          transparent
          loading={loading}
          onPress={() => {
            resetMessagesErrors();
            setLoading(true);
            if (!email.value || !password.value) {
              if (!email.value) {
                setEmail({
                  messageError: '* Preencha este campo.',
                });
              }
              if (!password.value) {
                setPassword({
                  messageError: '* Preencha este campo.',
                });
              }
              setLoading(false);
              return;
            }
            User.login({
              email: email.value,
              password: password.value,
              setLoading,
              setIsLogged,
              setUser,
            });
          }}
        />
        <WrapperText alignCenter>
          <OptionText>Ou crie sua conta,</OptionText>
          <RedirectToDestiny
            onPress={() => navigation.navigate('CreateAccount')}>
            <ClickHere> aqui</ClickHere>
          </RedirectToDestiny>
        </WrapperText>
      </FormLogin>
    </WrapperKeyboardAvoidingView>
  );
};

export default Login;
