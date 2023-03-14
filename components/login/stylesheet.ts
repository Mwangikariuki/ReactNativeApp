import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    padding: 10,
    fontWeight: "400"
  },
  container: {
    padding: 20
  },
  login: {
    fontSize: 28,
    fontWeight: "700"
  }
});

export default styles;
