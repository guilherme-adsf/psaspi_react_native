import React from 'react';
import {Container, LeftView, RightView, Text, Touchable} from './styles';

const ChangeViewCollect = ({choice = 'Minhas Coletas', setFilterChoice}) => {
  return (
    <Container>
      <Touchable onPress={() => setFilterChoice('Minhas Coletas')}>
        <LeftView isSelected={choice === 'Minhas Coletas'}>
          <Text isSelected={choice === 'Minhas Coletas'}>Minhas Coletas</Text>
        </LeftView>
      </Touchable>
      <Touchable onPress={() => setFilterChoice('Histórico de Coletas')}>
        <RightView isSelected={choice === 'Histórico de Coletas'}>
          <Text isSelected={choice === 'Histórico de Coletas'}>
            Histórico de Coletas
          </Text>
        </RightView>
      </Touchable>
    </Container>
  );
};

export default ChangeViewCollect;
