import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import { Input, Icon } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";
import styles from "./stylesheet";
import { Navigate } from "react-router-native";

interface APIResponse {
  id: number;
  username: String;
  email: String;
  firstName: String;
  lastName: String;
  gender: String;
  image: String;
  token: String;
}

const LoginPage = () => {
  const [data, setData] = useState<APIResponse>();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const getLogin = () => {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  };

  const LoginComponent = () => {
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
          <Text style={styles.login}>Login</Text>
          <Text style={styles.title}>Username</Text>
          <Input
            onChangeText={(username) => setUsername(username)}
            defaultValue={username}
            placeholder="Username"
            leftIcon={<Icon name="email" size={24} color="grey" />}
          />
          <Text style={styles.title}>Password</Text>
          <Input
            onChangeText={(password) => setPassword(password)}
            defaultValue={password}
            placeholder="Password"
            leftIcon={<Icon name="lock" size={24} color="grey" />}
          />
          <Button
            onPress={() => {
              getLogin();
            }}
            title="Sign In"
          />
        </View>
      </SafeAreaProvider>
    );
  };

  return !data?.token ? (
    <LoginComponent />
  ) : (
    <Navigate to={"/"} replace={true} />
  );
};

export default LoginPage;
