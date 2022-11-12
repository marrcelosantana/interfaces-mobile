import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { db } from "../../config/firebase";
import StudentService from "../../service/StudentService";

import { styles } from "./styles";

export default function StudentDetails({ route, id }) {
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
      <Text>Nome: {name}</Text>
      <Text>Curso: {course}</Text>
      <Text>IRA: {ira}</Text>
    </View>
  );
}
