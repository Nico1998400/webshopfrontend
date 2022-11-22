import { useState } from "react";
import { TextInput, View, Button } from 'react-native';


const AddProduct = () => {

    const [input, setInput] = useState("");
    

    const addnewProduct = async (product) => {

        await fetch("https://6848-83-248-1-128.eu.ngrok.io/api/product/post", {
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

      export default AddProduct;

/*import React, { useState } from "react";
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

export default AddProduct; */
