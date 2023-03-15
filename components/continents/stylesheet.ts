import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#FFFFFF",
    width: width,
  },
  code: {
    fontSize: 14,
    fontWeight: "300",
    paddingTop: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "800",
  },
});

export default styles;
