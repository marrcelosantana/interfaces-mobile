import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function Register(props) {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [university, setUniversity] = useState("");

  function register() {
    props.navigation.navigate("HomePage");
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
          <Text style={styles.name}>Universidade: </Text>
          <TextInput
            placeholder="Digite sua universidade..."
            style={styles.input}
            onChangeText={(university) => setUniversity(university)}
            value={university}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={register}>
        <Text>CADASTRAR</Text>
      </TouchableOpacity>
    </View>
  );
}
