import { useEffect, useState } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

export default function Questao04() {
  const [countries, setCountries] = useState([]);
  const [countryUrl, setCountryUrl] = useState("africa");

  useEffect(() => {
    fetch(
      `https://restcountries.com/v2/region/${countryUrl}?fields=name,population`
    )
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        responseJson.sort((a, b) => {
          var smaller = a.population;
          var bigger = b.population;
          if (countryUrl === "asia") {
            if (smaller < bigger) {
              return -1;
            } else if (smaller > bigger) {
              return 1;
            } else {
              return 0;
            }
          } else {
            if (smaller > bigger) {
              return -1;
            } else if (smaller < bigger) {
              return 1;
            } else {
              return 0;
            }
          }
        });
        setCountries(responseJson);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [countryUrl]);

  function changeCountryAmerica() {
    setCountryUrl("americas");
  }

  function changeCountryAsia() {
    setCountryUrl("asia");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>Maior População: {countries[0]?.name} </Text>
      <Text style={styles.name}>
        Número de Habitantes: {countries[0]?.population}
      </Text>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={changeCountryAmerica} style={styles.button}>
          América
        </TouchableOpacity>
        <TouchableOpacity onPress={changeCountryAsia} style={styles.button}>
          Ásia
        </TouchableOpacity>
        {countryUrl !== "africa" && (
          <TouchableOpacity
            onPress={() => {
              setCountryUrl("africa");
            }}
            style={styles.button}
          >
            África
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
