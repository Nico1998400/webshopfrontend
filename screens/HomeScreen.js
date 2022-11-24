import React, { useState, useEffect } from "react";
import { View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const  HomeScreen = () => {
  const [product, setProduct] = useState([]);
  const nav = useNavigation();

  useEffect(() => {
  const interval = setInterval(() => {
    fetch('http://10.0.2.2:8080/api/product')
    .then((res) => res.json())
    .then((data) => setProduct(data));
    console.log(product)
  }, 1000);
  return () => clearInterval(interval)
  }, []);

  return (
    <View>
      <Pressable onPress={() => nav.navigate('addproduct')}>
        <Text>Add Product</Text>
        </Pressable>
        <Pressable onPress={() => nav.navigate('productscreen', {product})}>
        {product.map((item, index) => (
          <View key={index}>
            <Text>ProductID: {item.productID}</Text>
            <Text>ProductName: {item.productName}</Text>
            <Text>productTitle: {item.productTitle}</Text>
            <Text>ProductDesciption: {item.description}</Text>
            <Text>Price: {item.price}</Text>
            <Text>Photo: {item.photo}</Text>
          </View>
        ))}
        </Pressable>
    </View>
  )
}

export default HomeScreen;