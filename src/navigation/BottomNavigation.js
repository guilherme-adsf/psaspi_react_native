import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, Image, View, Platform} from 'react-native';
import {ELECTRON_BLUE, PRIMARY_GREY} from '~/theme/colors';
import {
  heightPercentageToDP as hdp,
  widthPercentageToDP as wdp,
} from 'react-native-responsive-screen';
import {POPPINS_400, POPPINS_700} from '~/theme/text-styles';

import Home from '~/screens/Home';
import UserData from '~/screens/UserData';
import MainContext from '~/contexts/MainContext';

const Tab = createBottomTabNavigator();

function MyTabs() {
  const {modalNewCollect, insets, statusIbmKey} = useContext(MainContext);

  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: PRIMARY_GREY,
      }}
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: ELECTRON_BLUE,
          height: hdp('9%'),
        },
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let path;

          switch (route.name) {
            case 'Minhas Coletas':
              path = require('~/assets/images/list.png');
              break;
            case 'Realizar Coleta':
              path = require('~/assets/images/new.png');
              break;
            case 'Dados do Usuário':
              path = require('~/assets/images/user.png');
              break;
          }

          return (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: Platform.OS === 'ios' ? -(insets.bottom - 15) : 0,
              }}>
              <Image
                source={path}
                style={{
                  width: wdp('7%'),
                  height: hdp('3.5%'),
                  resizeMode: 'contain',
                }}
              />
              <Text
                style={{
                  fontSize: wdp('3%'),
                  fontFamily: focused ? POPPINS_700 : POPPINS_400,
                  color: '#FFF',
                  marginTop: 5,
                }}>
                {route.name}
              </Text>
            </View>
          );
        },
      })}>
      <Tab.Screen name="Minhas Coletas" component={Home} />
      <Tab.Screen
        name="Realizar Coleta"
        component={Home}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            if (statusIbmKey?.openModal) {
              return;
            }
            modalNewCollect.current.open();
          },
        }}
      />
      <Tab.Screen name="Dados do Usuário" component={UserData} />
    </Tab.Navigator>
  );
}

export default MyTabs;
