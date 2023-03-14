import React, { useState } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import DashBoard from "./components/dashboard";
import MainHeader from "./components/header";
import { Dimensions } from "react-native";
import Continents from "./components/continents";
import LoginPage from "./components/login";

const width = Dimensions.get('window').width; 

const DropDownContent = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          { key: "Home" },
          { key: "Staff" },
          { key: "Continents" },
          { key: "Sign out" },
        ]}
        renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    top: 97,
    padding: 10,
    backgroundColor: "#FFFFFF",
    zIndex: 1,
    width: width
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default function App() {
  const [visible, setVisible] = useState(false);
  return (
    <SafeAreaProvider>
      <MainHeader
        onClick={() => {
          !visible ? setVisible(true) : setVisible(false);
        }}
      />
      {visible ? <DropDownContent /> : ""}
    <LoginPage />
    </SafeAreaProvider>
  );
}
