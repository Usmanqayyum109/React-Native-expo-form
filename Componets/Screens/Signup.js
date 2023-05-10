import React, { useState } from "react";
import { Text, View } from "react-native";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";

const Login = ({ navigation }) => {
  const changeName = (event) => {
    setName(event);
  };

  const changePassword = (event) => {
    setPassword(event);
  };

  return (
    <View style={initialStyle.main}>
      <TextInput
        onChangeText={changeName}
        placeholder="Name"
        style={initialStyle.input}
      />

      <TextInput
        onChangeText={changePassword}
        keyboardType="numeric"
        placeholder="Password"
        secureTextEntry={true}
        style={initialStyle.input}
      />
      <View style={initialStyle.main}>
        <TouchableOpacity style={initialStyle.input}>
          <Text style={initialStyle.loginButtonText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const initialStyle = StyleSheet.create({
  main: {
    justifyContent: "center",
    textAlign: "center",
  },
  input: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "blue",
    fontSize: 18,
    fontWeight: "bold",
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "#fff",
    textAlign: "center",
    width: 170,
  },

  loginButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
