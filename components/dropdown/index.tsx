import { FlatList, View, Text } from "react-native";
import { Link } from "react-router-native";
import styles from "./stylesheet";

interface LinkProps {
    onPress: () => void;
  }
  
  const DropDownContent = (props: LinkProps) => {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            { key: "Home"},
            { key: "Staff" },
            { key: "Continents" },
            { key: "Sign-out" },
          ]}
          renderItem={({ item, index }) => {
            return (
              <Link key={index} onPress={props.onPress}
                to={`/${item.key === "Home" ? "" : item.key.toLowerCase()}`}
                underlayColor="#f0f4f7"
              >
                <Text key={index} >{item.key}</Text>
              </Link>
            );
          }}
        />
      </View>
    );
  };
  
export default DropDownContent;  