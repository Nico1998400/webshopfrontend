import {View , Text , Pressable ,TextInput, Alert} from "react-native";
import { useState } from "react";

const EditScreen = ({ route }) => {
  const [product, setProduct] = useState(route.params.product);

  const handleChange = (name, text) => {
    setProduct((prev) => ({ ...prev, [name]: text }));
  };

  const editProduct = async (product) => {
    await fetch(`http://10.0.2.2:8080/api/product/${product.productID}`, {
      method: "PUT",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
    });
    Alert.alert('Success');
  };

  return (
    <View>
      <View>
        <TextInput
          value={product.productName}
          onChangeText={(text) => handleChange("productName", text)}
        />
        <TextInput
          value={product.productTitle}
          onChangeText={(text) => handleChange("productTitle", text)}
        />
        <TextInput
          value={product.description}
          onChangeText={(text) => handleChange("description", text)}
        />
        <TextInput
          value={JSON.stringify(product.price)}
          onChangeText={(text) => handleChange("price", text)}
        />
        <Pressable onPress={() => editProduct(product)}>
          <Text>Save</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default EditScreen;
