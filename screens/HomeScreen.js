import React, { useState, useEffect } from "react";
import { View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const  HomeScreen = () => {
  const [productList, setProductList] = useState([]);
  const [cart, setCard] = useState();
  
  const nav = useNavigation();

  useEffect(() => {
  const interval = setInterval(() => {
    fetch('http://10.0.2.2:8080/api/product')
    .then((res) => res.json())
    .then((data) => setProductList(data));
    console.log(productList)
  }, 10000);
  return () => clearInterval(interval)
  }, []);

  return (
    <View>
      <Pressable onPress={() => nav.navigate('addproduct')}>
        <Text>Add Product</Text>
        </Pressable>
        {productList.map((product, index) => (
        <Pressable key={index} onPress={() => nav.navigate('productscreen', {product})}>
          <View>
            <Text>ProductID: {product.productID}</Text>
            <Text>ProductName: {product.productName}</Text>
            <Text>productTitle: {product.productTitle}</Text>
            <Text>ProductDesciption: {product.description}</Text>
            <Text>Price: {product.price}</Text>
            <Text>Photo: {product.photo}</Text>
          </View>
        </Pressable>
        ))}
    </View>
  )
}

export default HomeScreen;