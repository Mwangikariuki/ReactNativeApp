import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    top: 97,
    padding: 10,
    backgroundColor: "#FFFFFF",
    width: width,
  },
  user_name: {
    fontWeight: "900",
    padding: 10,
    marginBottom:10
  },
  details: {
    fontWeight: "800",
    padding: 10
  },
  keys: {
    fontWeight: "800",
    padding: 10
  },
  values: {
    fontWeight: "normal"
  }
});

export default styles;
