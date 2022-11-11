import { useEffect, useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-web";
import StudentCard from "../../components/StudentCard";
import { db } from "../../config/firebase";
import StudentService from "../../service/StudentService";

import { styles } from "./styles";

export default function ListStudents({ navigation }) {
  const [students, setStudents] = useState([]);

  function goToRegisterStudents() {
    navigation.navigate("RegisterStudents");
  }

  function goToHome() {
    navigation.navigate("HomePage");
  }

  function initStudents() {
    StudentService.list(db, (students) => {
      setStudents(students);
    });
  }

  useEffect(() => {
    initStudents();
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.content}>
        <FlatList
          data={students}
          renderItem={({ item }) => (
            <StudentCard
              name={item.name}
              id={item.id}
              initStudents={initStudents}
              navigation={navigation}
            />
          )}
          keyExtractor={(item) => item.id}
        />
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.button}
            onPress={goToRegisterStudents}
          >
            <Text style={styles.buttonText}>CADASTRAR MAIS</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={goToHome}>
            <Text style={styles.buttonText}>PÁGINA INICIAL</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}
