import { useEffect, useState } from "react";
import { ActivityIndicator, View, Text } from "react-native";

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
    <View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        data.map((item) => {
          return <Text>{item.sCode}</Text>;
        })
      )}
    </View>
  );
};

export default Continents;
