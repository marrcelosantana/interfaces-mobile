import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { db } from "../../config/firebase";
import StudentService from "../../service/StudentService";

import { styles } from "./styles";

export default function RegisterStudents({ navigation }) {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [ira, setIra] = useState(0);

  function register() {
    StudentService.create(
      db,
      (id) => {
        alert(`Estudante ${id} inserido com sucesso!`);
        clear();
        navigation.navigate("ListStudents");
      },
      { name, course, ira }
    );
  }

  function clear() {
    setName("");
    setCourse("");
    setIra(0);
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
          <Text style={styles.name}>Ira: </Text>
          <TextInput
            placeholder="Digite seu ira..."
            style={styles.input}
            onChangeText={(ira) => setIra(ira)}
            keyboardType="numeric"
            value={ira}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={register}
        disabled={name === "" || course === ""}
      >
        <Text style={styles.buttonText}>CADASTRAR</Text>
      </TouchableOpacity>
    </View>
  );
}
