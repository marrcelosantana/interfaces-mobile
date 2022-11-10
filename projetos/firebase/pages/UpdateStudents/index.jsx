import { addDoc, collection, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { db } from "../../config/firebase";

import { styles } from "./styles";

export default function UpdateStudents({ navigation, route }) {
  const [name, setName] = useState(route.params.name);
  const [course, setCourse] = useState(route.params.course);
  const [ira, setIra] = useState(route.params.ira);
  const idStudent = route.params.id;

  // function updateStudent(name, course, ira, id) {
  //   db.collection("students").doc(id).update({
  //     name: name,
  //     course: course,
  //     ira: ira,
  //   });
  //   navigation.navigate("ListStudents");
  // }

  async function updateStudent(id) {
    try {
      await updateDoc(collection(db, "students", id), {
        name: name,
        course: course,
        ira: ira,
        id: idStudent,
      });
      navigation.navigate("ListStudents");
    } catch (e) {
      alert("Error adding document: ", e);
    }
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
        onPress={() => {
          updateStudent(name, course, ira, idStudent);
        }}
        disabled={name === "" || course === ""}
      >
        <Text>ATUALIZAR</Text>
      </TouchableOpacity>
    </View>
  );
}
