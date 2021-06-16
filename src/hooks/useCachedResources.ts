import {Ionicons} from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        await Font.loadAsync({
          ...Ionicons.font,
          'poppins-regular': require('~/assets/fonts/Poppins-Regular.ttf'),
          'raleway-bold': require('~/assets/fonts/Raleway-Bold.ttf'),
          'poppins-medium': require('~/assets/fonts/Poppins-Medium.ttf'),
          'poppins-bold': require('~/assets/fonts/Poppins-Bold.ttf'),
          Roboto: require('native-base/Fonts/Roboto.ttf'),
          Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setLoadingComplete(true);
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
