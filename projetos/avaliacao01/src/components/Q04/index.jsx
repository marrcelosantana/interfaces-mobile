import { useEffect, useState } from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";

export default function Questao04() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.com/v2/region/africa?fields=name,population`)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        responseJson.sort((a, b) => {
          var smaller = a.population;
          var bigger = b.population;
          if (smaller > bigger) {
            return -1;
          } else if (smaller < bigger) {
            return 1;
          } else {
            return 0;
          }
        });
        setCountries(responseJson);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.name}>Maior População: {countries[0]?.name} </Text>
      <Text style={styles.name}>
        Número de Habitantes: {countries[0]?.population}
      </Text>
    </View>
  );
}
