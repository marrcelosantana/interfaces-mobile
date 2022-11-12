import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { db } from "../../config/firebase";
import TeacherService from "../../service/TeacherService";
import { FontAwesome5 } from "@expo/vector-icons";

import { styles } from "./styles";

export default function TeacherDetails({ route }) {
  const [name, setName] = useState(route.params.name);
  const [course, setCourse] = useState(route.params.course);
  const [salary, setSalary] = useState(route.params.salary);
  const teacherId = route.params.id;

  function getTeacherData() {
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

  useEffect(() => {
    getTeacherData();
  }, []);

  return (
    <View style={styles.container}>
      <FontAwesome5
        name="user-tie"
        size={150}
        color="black"
        style={styles.icon}
      />
      <Text style={styles.text}>
        <strong>Nome:</strong> {name}
      </Text>
      <Text style={styles.text}>
        <strong>Curso:</strong> {course}
      </Text>
      <Text style={styles.text}>
        <strong>Salário:</strong> {salary}
      </Text>
    </View>
  );
}
