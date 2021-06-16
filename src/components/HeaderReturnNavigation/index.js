import React from 'react';
import {ContainerReturnImage, ReturnImage} from './styles';
import {useNavigation} from '@react-navigation/native';

const HeaderReturnNavigation = ({route}) => {
  const navigation = useNavigation();

  return (
    <ContainerReturnImage
      onPress={() => {
        if (!route) {
          navigation.goBack();
          return;
        }
        navigation.navigate(route);
      }}>
      <ReturnImage />
    </ContainerReturnImage>
  );
};

export default HeaderReturnNavigation;
