import { View, Text, Pressable } from "react-native";

const ProductScreen = ({ route }) => {
  console.log(route.params.product);

  const { productID, productName, productTitle, description, price } =
    route.params.product;

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
    </View>
  );
};

export default ProductScreen;
