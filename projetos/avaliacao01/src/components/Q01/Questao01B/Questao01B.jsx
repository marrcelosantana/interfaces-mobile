import { Text, View } from "react-native";

import { styles } from "./styles";

export default function Questao01B() {
  let subjects = ["Fup", "Estruturas de Dados", "Introdução à Computação"];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Disciplinas: </Text>
      <View style={styles.list}>
        {subjects.map((subject) => (
          <Text style={styles.item}>{subject}</Text>
        ))}
      </View>
    </View>
  );
}
