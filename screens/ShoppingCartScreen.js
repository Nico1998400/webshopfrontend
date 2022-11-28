import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { CartContext } from '../CartContext';

const {items, getItemsCount, getTotalPrice} = useContext(CartContext);

const ShoppingCartScreen = () => {

  return (
    <View>
        <Text>Knas</Text>
    </View>
  )
}

export default ShoppingCartScreen;