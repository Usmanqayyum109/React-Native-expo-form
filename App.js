import { View, Text, TextInput, Button } from "react-native";
import { useState } from "react";

const App = () => {
  const [name, setname] = useState("");

  const change = (name) => {
    setname(name);
  };
  return (
    <View>
      <Text>{name}</Text>
      <br></br>
      <TextInput onChangeText={change} value={name} placeholder="Enter Name" />
      <br></br>
      <TextInput
        textContentType="password"
        placeholder="Password"
        secureTextEntry="false"
      />
      <br></br>
      <Button title="Submit"></Button>
    </View>
  );
};

export default App;
