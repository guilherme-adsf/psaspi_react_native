import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Container,
  Title,
  LeftContainer,
  CenterContainer,
  RightContainer,
  ReturnContainer,
  Return,
  LogoutContainer,
  Logout,
  Main,
} from './styles';
import {StatusBar} from 'expo-status-bar';
import {ELECTRON_BLUE} from '~/theme/colors';
import MainContext from '~/contexts/MainContext';
import User from '~/api/User';
import dayjs from 'dayjs';

const Header = ({withBack = true, title}) => {
  const navigation = useNavigation();
  const {setIsLogged, user, setUser, insets} = useContext(MainContext);

  const title_default = () => {
    const hora = dayjs().format('HH');

    if (hora >= 12 && hora <= 18) {
      return `Boa tarde, ${user.firstName}`;
    } else if (hora >= 18 && hora <= 24) {
      return `Boa noite, ${user.firstName}`;
    } else {
      return `Bom dia, ${user.firstName}`;
    }
  };

  return (
    <Main>
      <StatusBar backgroundColor={ELECTRON_BLUE} />
      <Container paddingTop={insets.top}>
        <LeftContainer>
          {withBack && (
            <ReturnContainer
              onPress={() => {
                navigation.goBack();
              }}>
              <Return />
            </ReturnContainer>
          )}
        </LeftContainer>
        <CenterContainer>
          <Title numberOfLines={1}>{title ?? title_default()}</Title>
        </CenterContainer>
        <RightContainer>
          <LogoutContainer
            onPress={() => {
              User.logout({
                setIsLogged,
                setUser,
              });
            }}>
            <Logout />
          </LogoutContainer>
        </RightContainer>
      </Container>
    </Main>
  );
};

export default Header;
