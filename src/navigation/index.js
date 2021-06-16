import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '~/screens/Login';
import CreateAccount from '~/screens/CreateAccount';
import RecoveryPassword from '~/screens/RecoveryPassword';
import ResetPassword from '~/screens/RecoveryPassword/screens/ResetPassword';
import BottomNavigation from '~/navigation/BottomNavigation';
import MainContext from '~/contexts/MainContext';
import CollectionTweets from '~/screens/CollectionTweets';

export default function Navigation() {
  const linking = {
    prefixes: ['capitalsocial://'],
    config: {
      screens: {
        ResetPassword: 'resetpassword/:id',
      },
    },
  };

  return (
    <NavigationContainer linking={linking} fallback={<></>}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

function RootNavigator() {
  const {isLogged} = useContext(MainContext);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {isLogged ? (
        <>
          <Stack.Screen name="Home" component={BottomNavigation} />
          <Stack.Screen name="CollectionTweets" component={CollectionTweets} />
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="CreateAccount" component={CreateAccount} />
          <Stack.Screen name="RecoveryPassword" component={RecoveryPassword} />
          <Stack.Screen name="ResetPassword" component={ResetPassword} />
        </>
      )}
    </Stack.Navigator>
  );
}
