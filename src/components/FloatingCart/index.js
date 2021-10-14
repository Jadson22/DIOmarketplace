import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {
  CartButton,
  CartButtonText,
  CartPricing,
  CartTotalPrice,
  Container,
} from './styles';
import FeatherIcon from 'react-native-vector-icons/Feather';

const FloatingCart = () => {
  const navigation = useNavigation();

  const redirectCart = () => {
    navigation.navigate('Cart');
  };

  return (
    <Container>
      <CartButton onPress={redirectCart}>
        <FeatherIcon name="shopping-cart" size={24} color="#f3f9ff" />
        <CartButtonText>2 itens</CartButtonText>
        <CartPricing>
          <CartTotalPrice>R$ 200,00</CartTotalPrice>
        </CartPricing>
        <FeatherIcon name="chevron-right" size={24} color="#f3f9ff" />
      </CartButton>
    </Container>
  );
};

export default FloatingCart;
