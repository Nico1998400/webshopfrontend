import { useContext, useState } from "react";
import { View, Text, Pressable } from "react-native";
import { CartContext } from "../CartContext";
import { useNavigation } from "@react-navigation/native";

const ProductScreen = ({ route }) => {
  //console.log(route.params.product);

  const { addItemToCart } = useContext(CartContext);
  const [product, setProduct] = useState(route.params.product);

  const nav = useNavigation();

  const { productID, productName, productTitle, description, price } = route.params.product;

  const deleteProduct = async (productID) => {
    await fetch(`http://10.0.2.2:8080/api/product/${productID}`, {
      method: "DELETE",
    }); 
  }



  return (
    <View>
      <Text>Name: {productName}</Text>
      <Text>Title: {productTitle}</Text>
      <Text>Description: {description}</Text>
      <Text>Price: {price}</Text>
      <Pressable onPress={() => addItemToCart(productID)}>
        <Text>Add Item to Cart</Text>
      </Pressable>
      <Pressable onPress={() => deleteProduct(productID)}>
        <Text>Delete</Text>
      </Pressable>
      <Pressable onPress={() => nav.navigate('editscreen',{product} )}>
        <Text>Edit</Text>
        </Pressable>
    </View>
  );
};

export default ProductScreen;
