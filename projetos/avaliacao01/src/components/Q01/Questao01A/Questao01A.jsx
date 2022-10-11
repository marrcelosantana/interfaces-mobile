import { Text, View } from 'react-native';

import { styles } from "./styles";

export default function Questao01A({name, course}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>NOME: {name}</Text>
      <Text style={styles.title}>CURSO: {course}</Text>
    </View>
  );
}

