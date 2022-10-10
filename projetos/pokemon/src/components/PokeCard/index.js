import { useEffect, useState } from "react";
import { Button, Image, Text, View } from "react-native";

import { styles } from "./styles";

export default function PokeCard() {
  const [id, setId] = useState(1);
  const [name, setName] = useState("");
  const [frontImage, setFrontImage] = useState("");
  const [types, setTypes] = useState([]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        setName(responseJson.name);
        setFrontImage(responseJson.sprites.other.home.front_default);
        setTypes(responseJson.types);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  function advance() {
    setId(id + 1);
  }

  function comeBack() {
    if (id > 1) {
      setId(id - 1);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.pokeInfo}>
        <Text style={styles.id}>#0{id}</Text>
        <Image source={{ uri: frontImage, width: 150, height: 150 }} />
        <Text style={styles.name}>{name.toUpperCase()}</Text>
        <View style={styles.types}>
          <Text style={styles.typeName}>{types[0]?.type.name}</Text>
          <Text style={styles.typeName}>{types[1]?.type.name}</Text>
        </View>
      </View>
      <View style={styles.buttons}>
        <Button title="Anterior" onPress={comeBack} />
        <Button title="Próximo" onPress={advance} />
      </View>
    </View>
  );
}
