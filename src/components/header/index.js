import React from 'react';
import { Container, Image } from './styles';
import Logo from '../../assets/market-place.png';

const header = () => {
  return (
    <Container>
      <Image source={Logo} />
    </Container>
  );
};

export default header;
