import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function RegisterTeachers({ navigation }) {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [wage, setWage] = useState(0);

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
            onChangeText={(name) => setName(name)}
            value={name}
          />
        </View>

        <View style={styles.inputContent}>
          <Text style={styles.name}>Curso: </Text>
          <TextInput
            placeholder="Digite seu curso..."
            style={styles.input}
            onChangeText={(course) => setCourse(course)}
            value={course}
          />
        </View>

        <View style={styles.inputContent}>
          <Text style={styles.name}>Salário: </Text>
          <TextInput
            placeholder="Digite seu salário..."
            style={styles.input}
            onChangeText={(wage) => setWage(wage)}
            value={wage}
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
