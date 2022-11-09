import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

export default function RegisterStudents({ navigation }) {
  const [nome, setNome] = useState("");
  const [curso, setCurso] = useState("");
  const [ira, setIra] = useState(0);

  function register() {
    navigation.navigate("ListStudents");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ADICIONAR ESTUDANTE</Text>
      <View style={styles.inputsContainer}>
        <View style={styles.inputContent}>
          <Text style={styles.name}>Nome: </Text>
          <TextInput
            placeholder="Digite o nome..."
            style={styles.input}
            onChangeText={(nome) => setNome(nome)}
            value={nome}
          />
        </View>

        <View style={styles.inputContent}>
          <Text style={styles.name}>Curso: </Text>
          <TextInput
            placeholder="Digite seu curso..."
            style={styles.input}
            onChangeText={(curso) => setCurso(curso)}
            value={curso}
          />
        </View>

        <View style={styles.inputContent}>
          <Text style={styles.name}>Universidade: </Text>
          <TextInput
            placeholder="Digite seu ira..."
            style={styles.input}
            onChangeText={(ira) => setIra(ira)}
            keyboardType="numeric"
            value={ira}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={register}>
        <Text>CADASTRAR</Text>
      </TouchableOpacity>
    </View>
  );
}
