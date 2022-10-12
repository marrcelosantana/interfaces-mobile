import { Text, View } from "react-native";

import { styles } from "./styles";

export default function PokeCard({ name }) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}
