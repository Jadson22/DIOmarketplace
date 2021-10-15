import React from 'react';
import { View } from 'react-native';
import { Container, EmptyCartText } from './styles';
import FeatherIcon from 'react-native-vector-icons/Feather';

const EmptyCart = () => {
  return (
    <Container>
      <FeatherIcon name="slash" size={38} color="#f3f9ff" />
      <EmptyCartText>Seu carrinho está vazio</EmptyCartText>
    </Container>
  );
};

export default EmptyCart;
