import { useState } from 'react';
import { View } from 'react-native';
import Questao01A from '../Questao01A/Questao01A';
import Questao01B from '../Questao01B/Questao01B';

import { styles } from "./styles";

export default function Questao01() {
  const [name] = useState("Marcelo Santana");
  const [course] = useState("Sistemas de Informação");

  return (
    <View style={styles.container}>
      <Questao01A name={name} course={course}/>
      <Questao01B/>
    </View>
  );
}

