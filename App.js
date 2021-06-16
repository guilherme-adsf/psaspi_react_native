import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigation from '~/navigation';
import useCachedResources from '~/hooks/useCachedResources';
import {MainContextProvider} from '~/contexts/MainContext';
import {Root} from 'native-base';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <StatusBar style="dark" />
        <MainContextProvider>
          <Root>
            <Navigation />
          </Root>
        </MainContextProvider>
      </SafeAreaProvider>
    );
  }
}
