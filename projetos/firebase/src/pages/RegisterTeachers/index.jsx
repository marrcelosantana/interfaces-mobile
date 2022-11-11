import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { db } from "../../config/firebase";
import TeacherService from "../../service/TeacherService";

import { styles } from "./styles";

export default function RegisterTeachers({ navigation }) {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [salary, setSalary] = useState(0);

  function register() {
    TeacherService.create(
      db,
      (id) => {
        alert(`Professor ${id} inserido com sucesso!`);
        clear();
        navigation.navigate("ListTeachers");
      },
      { name, course, salary }
    );
  }

  function clear() {
    setName("");
    setCourse("");
    setSalary(0);
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
            onChangeText={(salary) => setSalary(salary)}
            keyboardType="numeric"
            value={salary}
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
