import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native";
const Home = ({ navigation }) => {
  return (
    <View>
      <Text>Home Page</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate("Login")}
      />
      <br />
      <Button
        title="Go to Signup"
        onPress={() => navigation.navigate("Signup")}
      />
    </View>
  );
};

export default Home;
