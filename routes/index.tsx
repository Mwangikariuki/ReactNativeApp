import React from "react";
import { NativeRouter, Route, Routes } from "react-router-native";
import Home from "../components/home";
import Staff from "../components/staff";

const Router = () => {
  return (
    <NativeRouter>
      <Routes>
        <Route path={""} Component={Home} />
        <Route path={"staff"} Component={Staff} />
      </Routes>
    </NativeRouter>
  );
};

export default Router;
