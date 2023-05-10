import React from "react";
// import { View, Text, TextInput, Button } from "react-native";
// import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Componets/Screens/Home";
import Login from "./Componets/Screens/Login";
import Signup from "./Componets/Screens/Signup";

const Stack = createNativeStackNavigator();

const App = () => {
  // const [name, setname] = useState("");

  // const change = (name) => {
  //   setname(name);
  // };
  return (
    // <View>
    //   <Text>{name}</Text>
    //   <br></br>
    //   <TextInput onChangeText={change} value={name} placeholder="Enter Name" />
    //   <br></br>
    //   <TextInput
    //     textContentType="password"
    //     placeholder="Password"
    //     secureTextEntry="false"
    //   />
    //   <br></br>
    //   <Button title="Submit"></Button>

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
    // </View>
  );
};

export default App;
