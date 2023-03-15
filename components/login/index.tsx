import { View, Text } from "react-native";
import { Input, Icon } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";
import styles from "./stylesheet";

const LoginPage = () => {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Text style={styles.login}>Login</Text>
        <Text style={styles.title}>Email</Text>
        <Input
          placeholder="Email Address"
          leftIcon={<Icon name="email" size={24} color="grey" />}
        />
        <Text style={styles.title}>Password</Text>
        <Input
          placeholder="Password"
          leftIcon={<Icon name="lock" size={24} color="grey" />}
        />
      </View>
    </SafeAreaProvider>
  );
};

export default LoginPage;
