import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function RegisterTeachers({ navigation }) {
  const [nome, setNome] = useState("");
  const [curso, setCurso] = useState("");
  const [salario, setSalario] = useState(0);

  function register() {
    navigation.navigate("ListTeachers");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ADICIONAR PROFESSOR</Text>
      <View style={styles.inputsContainer}>
        <View style={styles.inputContent}>
          <Text style={styles.name}>Nome: </Text>
          <TextInput
            placeholder="Digite o nome..."
            style={styles.input}
            onChangeText={(name) => setNome(name)}
            value={name}
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
          <Text style={styles.name}>Salário: </Text>
          <TextInput
            placeholder="Digite seu salário..."
            style={styles.input}
            onChangeText={(salario) => setSalario(salario)}
            value={salario}
            keyboardType="numeric"
          />
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={register}>
        <Text>CADASTRAR</Text>
      </TouchableOpacity>
    </View>
  );
}
