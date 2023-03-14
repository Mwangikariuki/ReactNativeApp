import { View, Text, FlatList } from "react-native";
import styles from "./stylesheet";

const UserData = [
  {
    name: "Stephen Amimo",
    Age: 50,
    Gender: "male",
    Email: "atuny0@sohu.com",
    Phone: "+63 791 675 8914",
    Birth_Date: "2000-12-25",
    Blood_Group: "A−",
    Height: 189,
    Weight: 75.4,
    Eye_Color: "Green",
  },
];

const DashBoard = () => {
  return (
    <View style={styles.container}>
      {UserData.map((item) => {
        return (
          <View>
            <Text>
              Welcome <Text style={styles.user_name}>{item.name}</Text>
            </Text>
            <Text> Your Profile is as Below</Text>
            <Text style={styles.keys}>
              Age: <Text style={styles.values}>{item.Age}</Text>
            </Text>
            <Text style={styles.keys}>
              Gender: <Text style={styles.values}>{item.Gender}</Text>
            </Text>
            <Text style={styles.keys}>
              Email: <Text style={styles.values}>{item.Email}</Text>
            </Text>
            <Text style={styles.keys}>
              Phone: <Text style={styles.values}>{item.Phone}</Text>
            </Text>
            <Text style={styles.keys}>
              Birth_Date: <Text style={styles.values}>{item.Birth_Date}</Text>
            </Text>
            <Text style={styles.keys}>
              Blood_Group: <Text style={styles.values}>{item.Blood_Group}</Text>
            </Text>
            <Text style={styles.keys}>
              Height: <Text style={styles.values}>{item.Height}</Text>
            </Text>
            <Text style={styles.keys}>
              Weight: <Text style={styles.values}>{item.Weight}</Text>
            </Text>
            <Text style={styles.keys}>
              Eye_Color: <Text style={styles.values}>{item.Eye_Color}</Text>
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default DashBoard;
