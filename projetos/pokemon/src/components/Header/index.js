import { Image, Text, View } from "react-native";

import { styles } from "./styles";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PokéDex</Text>
      <Image
        source={{
          uri: "https://img.pokemondb.net/sprites/black-white/anim/normal/gengar.gif",
          width: 50,
          height: 50,
        }}
      />
    </View>
  );
}
