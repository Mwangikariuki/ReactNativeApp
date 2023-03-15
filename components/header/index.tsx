import { Header } from "@rneui/base";
import { useState } from "react";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import DropDownContent from "../dropdown";

interface HeaderProps {
  onClick: () => void;
}

const Head = (props: HeaderProps) => {
  return (
    <Header
      placement="left"
      leftComponent={{
        icon: "menu",
        onPress: props.onClick,
        color: "#ffffff",
      }}
      centerComponent={{ text: "ZAMARA APP", style: { color: "#ffffff" } }}
    />
  );
};

const MainHeader = () => {
  const [visible, setVisible] = useState(false);
  return (
    <SafeAreaProvider>
      <Head
          onClick={() => {
            !visible ? setVisible(true) : setVisible(false);
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
    </SafeAreaProvider>
  )
}

export default MainHeader;
