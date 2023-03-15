import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Continents from "./components/continents";
import LoginPage from "./components/login";
import { NativeRouter, Route, Routes } from "react-router-native";
import Staff from "./components/staff";
import DashBoard from "./components/dashboard";

export default function App() {
  return (
    <NativeRouter>
      <SafeAreaProvider>
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
