import React, {useEffect, useState, createContext, useRef} from 'react';
import Loading from '~/components/Loading';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {storage_get_data} from '~/utils/async_storage';
import ModalNewCollect from '~/components/ModalNewCollect';
import * as Updates from 'expo-updates';
import User from '~/api/User';

const MainContext = createContext({});

export const MainContextProvider = ({children}) => {
  const insets = useSafeAreaInsets();
  const modalNewCollect = useRef(null);
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');
  const [forceUpdate, setForceUpdate] = useState(false);
  const [statusIbmKey, setStatusIbmKey] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const update = await Updates.checkForUpdateAsync();
        console.log('Update', update.isAvailable);
        if (update.isAvailable) {
          console.log('Dentro');
          await Updates.fetchUpdateAsync();
          await Updates.reloadAsync();
        }
      } catch (e) {
        console.log(e);
      }

      const user_data_storage = await storage_get_data('user_data');

      if (!user_data_storage) {
        setIsLogged(false);
        setLoading(false);
        return;
      }

      // setForceUpdate(true);
      await User.verify_ibm_token({
        setStatusIbmKey,
      });

      setIsLogged(true);
      setUser(user_data_storage);
    })();
  }, []);
  //isLogged

  const closeLoadingModal = ({message = undefined, callback = undefined}) => {
    if (message) {
      setTimeout(() => {
        setLoadingMessage(message);
      }, 2000);
      setTimeout(() => {
        setLoading(false);
        setLoadingMessage('');
        if (callback) {
          callback();
        }
      }, 5000);
    } else {
      setLoading(false);
      if (callback) {
        callback();
      }
    }
  };

  return (
    <MainContext.Provider
      value={{
        insets,
        closeLoadingModal,
        setLoading,
        user,
        setUser,
        isLogged,
        setIsLogged,
        modalNewCollect,
        forceUpdate,
        setForceUpdate,
        statusIbmKey,
      }}>
      <Loading loading={loading} message={loadingMessage} />
      <ModalNewCollect
        modalizeRef={modalNewCollect}
        user={user}
        setLoading={setLoading}
        closeLoadingModal={closeLoadingModal}
        setForceUpdate={setForceUpdate}
      />
      {children}
    </MainContext.Provider>
  );
};

export default MainContext;
