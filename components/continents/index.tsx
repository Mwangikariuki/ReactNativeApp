import { useEffect, useState } from "react";
import { ActivityIndicator, View, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MainHeader from "../header";
import styles from "./stylesheet";

interface continent {
  sCode: string;
  sName: string;
}

const Continents = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<continent[]>([]);

  const getContinents = async () => {
    try {
      const response = await fetch(
        "http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso/ListOfContinentsByName/JSON/debug?"
      );
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getContinents();
  }, []);

  return (
    <SafeAreaProvider>
      <MainHeader />
      <View style={styles.container}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          data.map((item) => {
            return (
              <View>
                <Text style={styles.code}>{item.sCode}</Text>
                <Text style={styles.name}>{item.sName}</Text>
              </View>
            );
          })
        )}
      </View>
    </SafeAreaProvider>
  );
};

export default Continents;
