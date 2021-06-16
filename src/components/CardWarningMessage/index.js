import React from 'react';

import {Container, HashtagImage, Message} from './styles';

const CardWarningMessage = ({
  message = 'Nosso app dispoe de um plano gratuito que possui um limite mensal, nosso limite desse mês se esgotou enquanto nosso plano não volta estaremos desativando a coleta de tweets',
  marginHorizontal = 0,
  marginTop = 20,
  marginBottom = 10,
}) => {
  return (
    <Container
      marginHorizontal={marginHorizontal}
      marginTop={marginTop}
      marginBottom={marginBottom}>
      <HashtagImage />
      <Message>{message}</Message>
    </Container>
  );
};

export default CardWarningMessage;
