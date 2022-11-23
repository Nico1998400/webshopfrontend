/*import { useState } from "react";
import { TextInput, View, Button } from 'react-native';


const AddProduct = () => {

    const [input, setInput] = useState("");
    

    const addnewProduct = async (product) => {

        await fetch("http://10.0.2.2:8080/api/product/post", {
          method: "POST",

          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({productName: product}, {productTitle: product} )
        })
        .then(res => {
          console.log(res.status);
          console.log(res.headers);
          return res.json();
        })
        .then(
          (result) => {
            console.log(result);
          },
          (error) => {
            console.log(error);
          }
        )
      };

      return (
      <View>
         <TextInput placeholder='Product Name' value={input.productName} onChangeText={(value) => setInput(value)} />
         <TextInput placeholder='Product Title' value={input.productTitle} onChangeText={(value) => setInput(value)} />
      <Button title="Submit" onPress={() => addnewProduct(input)} />
      </View>
        )
      }

      export default AddProduct;*/

import React, { useState } from "react";
import { TextInput, View, Pressable, Text, Image } from 'react-native';

const AddProduct = () => {
    const [input, setInput] = useState({productName:"", productTitle:"", description:"", price:""})

    const handleChange = (name, text) => {
      console.log(name, text)
        setInput(prev => ({ ...prev, [name]: text}));
      };

    const addProduct = async () => {
        console.log("input:", input);
        await fetch("http://10.0.2.2:8080/api/product/post", {
          method: "POST",
          body: JSON.stringify(input),
          headers: {
            "Content-Type": "application/json",
          },
        })
        setInput("");
      };

      

  return (
    <View>
        <TextInput
        placeholder='Product Name'
        value={input.productName}
        onChangeText={(text) => handleChange("productName", text)}/>
        <TextInput
        placeholder='Product Title'
        value={input.productTitle}
        onChangeText={(text) => handleChange("productTitle", text)}/>
        <TextInput
        placeholder='Description'
        value={input.description}
        onChangeText={(text) => handleChange("description", text)}/>
        <TextInput
        placeholder='Price'
        value={input.price}
        onChangeText={(text) => handleChange("price", text, )}/>
        <Pressable
        onPress={addProduct}>
            <Text>Submit</Text>
        </Pressable>
    </View>
    
  )
}

export default AddProduct;
