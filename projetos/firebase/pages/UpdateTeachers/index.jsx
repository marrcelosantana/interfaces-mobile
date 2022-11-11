import { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import TeacherService from "../../service/TeacherService";
import { db } from "../../config/firebase";

import { styles } from "./styles";

export default function UpdateTeachers({ navigation, route }) {
  const [name, setName] = useState(route.params.name);
  const [course, setCourse] = useState(route.params.course);
  const [salary, setSalary] = useState(route.params.salary);
  const teacherId = route.params.id;

  function getStudentData() {
    TeacherService.getData(
      db,
      (student) => {
        setName(student.name),
          setCourse(student.course),
          setSalary(student.salary);
      },
      teacherId
    );
  }

  function updateStudent() {
    TeacherService.update(
      db,
      () => {
        alert("Estudante atualizado com sucesso!");
        navigation.navigate("ListTeachers");
      },
      teacherId,
      { name, course, salary }
    );
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
        onPress={updateStudent}
        disabled={name === "" || course === ""}
      >
        <Text style={styles.buttonText}>ATUALIZAR</Text>
      </TouchableOpacity>
    </View>
  );
}
