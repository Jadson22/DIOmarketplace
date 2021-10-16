import { useNavigation } from '@react-navigation/core';
import React, { useMemo } from 'react';
import {
  CartButton,
  CartButtonText,
  CartPricing,
  CartTotalPrice,
  Container,
} from './styles';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux';
import formatValue from '../../utils/formatValue';

const FloatingCart = () => {
  const navigation = useNavigation();

  const products = useSelector(({ cart }) => cart);

  const cartSize = useMemo(() => {
    return products.length || 0;
  }, [products]);

  const cartTotal = useMemo(() => {
    const cartAmount = products.reduce((accumulator, product) => {
      const totalPrice = accumulator + product.price * product.amount;
      return totalPrice;
    }, 0);
    return formatValue(cartAmount);
  });

  const redirectCart = () => {
    navigation.navigate('Cart');
  };

  return (
    <Container>
      <CartButton onPress={redirectCart}>
        <FeatherIcon name="shopping-cart" size={24} color="#f3f9ff" />
        <CartButtonText>
          {cartSize} {cartSize === 1 ? 'item' : 'itens'}
        </CartButtonText>
        <CartPricing>
          <CartTotalPrice>{cartTotal}</CartTotalPrice>
        </CartPricing>
        <FeatherIcon name="chevron-right" size={24} color="#f3f9ff" />
      </CartButton>
    </Container>
  );
};

export default FloatingCart;
