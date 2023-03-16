import React, { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Continents from "./components/continents";
import LoginPage from "./components/login";
import { NativeRouter, Route, Routes } from "react-router-native";
import Staff from "./components/staff";
import DashBoard from "./components/dashboard";
import Head from "./components/header";
import DropDownContent from "./components/dropdown";

export default function App() {
  const [visible, setVisible] = useState(false);
  return (
    <NativeRouter>
      <SafeAreaProvider>
        <Head
          onClick={() => {
            visible! ? setVisible(true) : setVisible(true);
          }}
        />
        {visible ? (
          <DropDownContent
            onPress={() => {
              setVisible(false);
            }}
          />
        ) : (
          ""
        )}
        <Routes>
          <Route path="/" Component={DashBoard} />
          <Route path="/staff" Component={Staff} />
          <Route path="/continents" Component={Continents} />
          <Route path="/sign-out" Component={LoginPage} />
        </Routes>
      </SafeAreaProvider>
    </NativeRouter>
  );
}
