import { useContext } from "react";
import { View, Text, Pressable } from "react-native";
import { CartContext } from "../CartContext";

const ProductScreen = ({ route }) => {
  //console.log(route.params.product);

  const { addItemToCart } = useContext(CartContext);

  const { productID, productName, productTitle, description, price } = route.params.product;

  const deleteProduct = async (productID) => {
    await fetch(`http://10.0.2.2:8080/api/product/${productID}`, {
      method: "DELETE",
    }); 
  }



  return (
    <View>
      <Pressable onPress={() => deleteProduct(productID)}>
        <Text>Delete</Text>
      </Pressable>
      <Text>Name: {productName}</Text>
      <Text>Title: {productTitle}</Text>
      <Text>Description: {description}</Text>
      <Text>Price: {price}</Text>
      <Pressable onPress={() => addItemToCart(productID)}>
        <Text>Add Item to Cart</Text>
      </Pressable>
    </View>
  );
};

export default ProductScreen;
