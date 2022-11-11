import { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import StudentService from "../../service/StudentService";
import { db } from "../../config/firebase";

import { styles } from "./styles";

export default function UpdateStudents({ route, navigation }) {
  const [name, setName] = useState(route.params.name);
  const [course, setCourse] = useState(route.params.course);
  const [ira, setIra] = useState(route.params.ira);
  const studentId = route.params.id;

  function getStudentData() {
    StudentService.getData(
      db,
      (student) => {
        setName(student.name), setCourse(student.course), setIra(student.ira);
      },
      studentId
    );
  }

  function updateStudent() {
    StudentService.update(
      db,
      () => {
        alert("Estudante atualizado com sucesso!");
        navigation.navigate("ListStudents");
      },
      studentId,
      { name, course, ira }
    );
    route.params.initStudents();
  }

  useEffect(() => {
    getStudentData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ATUALIZAR ESTUDANTE</Text>
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
        onPress={updateStudent}
        disabled={name === "" || course === ""}
      >
        <Text style={styles.buttonText}>ATUALIZAR</Text>
      </TouchableOpacity>
    </View>
  );
}
