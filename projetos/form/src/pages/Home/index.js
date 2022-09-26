import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-web";

import { styles } from "./styles";

export default function Home() {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [university, setUniversity] = useState("");

  function sendName() {
    alert(
      `Bem-vindo ${name}!\n Estudante do curso de ${course} na ${university}.`
    );
    setName("");
    setCourse("");
    setUniversity("");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CADASTRAR ESTUDANTE</Text>
      <View style={styles.inputContainer}>
        <View style={styles.inputContent}>
          <Text style={styles.name}>Nome: </Text>
          <TextInput
            placeholder="Digite seu nome..."
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
      <TouchableOpacity style={styles.button} onPress={sendName}>
        Enviar
      </TouchableOpacity>
    </View>
  );
}
