import React, {useEffect, useState, useContext} from 'react';
import {useIsFocused} from '@react-navigation/native';
import {Container, Scroll} from './styles';
import User from '~/api/User';
import Header from '~/components/Header';
import MainContext from '~/contexts/MainContext';
import CollectCard from './components/CollectCard';
import ChangeViewCollect from '~/components/ChangeViewCollect';
import CardWarningMessage from '~/components/CardWarningMessage';

const Home = ({navigation}) => {
  const {
    user,
    setLoading,
    forceUpdate,
    setForceUpdate,
    statusIbmKey,
  } = useContext(MainContext);
  const [collects, setCollects] = useState([]);
  const [filterChoice, setFilterChoice] = useState('Minhas Coletas');
  const focus = useIsFocused();

  useEffect(() => {
    User.get_collects({
      userId: user.id,
      setCollects,
      setLoading,
    });
    setFilterChoice('Minhas Coletas');
    setForceUpdate(false);
  }, [user, focus, forceUpdate]);

  useEffect(() => {
    setLoading(true);
    User.get_collects({
      userId: user.id,
      setCollects,
      setLoading,
      wasViewed: filterChoice === 'Minhas Coletas' ? 0 : 1,
    });
  }, [filterChoice]);

  return (
    <Container>
      <Header withBack={false} />
      <ChangeViewCollect
        choice={filterChoice}
        setFilterChoice={setFilterChoice}
      />
      {statusIbmKey?.openModal && <CardWarningMessage />}
      <Scroll>
        {collects.map((collect) => (
          <CollectCard collect={collect} setLoading={setLoading} />
        ))}
      </Scroll>
    </Container>
  );
};

export default Home;
