import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CartProvider } from "./CartContext";
import AddProduct from "./screens/AddProduct";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import ShoppingCartScreen from "./screens/ShoppingCartScreen";

export default function App() {

  const Stack = createNativeStackNavigator();

    return (
      <CartProvider>
      <NavigationContainer>
        <Stack.Navigator initalRouteName='homescreen'>
          <Stack.Screen name='homescreen' component={HomeScreen}/>
          <Stack.Screen name='productscreen' component={ProductScreen}/>
          <Stack.Screen name='addproduct' component={AddProduct}/>
          <Stack.Screen name='shoppingcartscreen' component={ShoppingCartScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
      </CartProvider>
  );
}


