import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import StudentService from "../../service/StudentService";
import { FontAwesome5 } from "@expo/vector-icons";
import { db } from "../../config/firebase";

import { styles } from "./styles";

export default function StudentDetails({ route }) {
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

  useEffect(() => {
    getStudentData();
  }, []);

  return (
    <View style={styles.container}>
      <FontAwesome5
        name="user-graduate"
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
        <strong>IRA:</strong> {ira}
      </Text>
    </View>
  );
}
