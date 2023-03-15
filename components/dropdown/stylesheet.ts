import {StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      position: "absolute",
      top: 97,
      padding: 10,
      backgroundColor: "#FFFFFF",
      zIndex: 1,
      width: width,
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });

  export default styles;