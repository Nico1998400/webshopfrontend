import React from 'react'
import { View, Text } from 'react-native'

const ProductScreen = ( {route} ) => {
  
  console.log(route.params.product)

  const { productTitle } = route.params.product;

  return (
    <View>
          <Text>Title: {productTitle}</Text>
    </View>
  )
}

export default ProductScreen