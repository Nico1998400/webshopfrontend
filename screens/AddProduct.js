import React, { useState } from "react";
import { TextInput, View, Pressable, Text } from 'react-native';

const AddProduct = () => {
    const [input, setInput] = useState({productName:""})

    const handleChange = (e) => {
        setInput(prev => ({ ...prev, [e.target.name]: e.target.value }));
      };

    const addProduct = async () => {
        console.log("input:", input);
        await fetch("https://ed65-83-248-1-128.eu.ngrok.io/api/product/post", {
          method: "POST",
          body: JSON.stringify(input),
          headers: {
            "Content-Type": "application/json",
          },
        })
      };

  return (
    <View>
        <TextInput
        value={input.productName}
        name="productName"
        onChange={handleChange}/>
        
        <Pressable
        onPress={addProduct}>
            <Text>Submit</Text>
        </Pressable>
    </View>
    
  )
}

export default AddProduct;