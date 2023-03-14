import { Header } from "@rneui/base";

interface HeaderProps {
  onClick: () => void;
}

const MainHeader = (props: HeaderProps) => {
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

export default MainHeader;
