import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-web";
import StudentCard from "../../components/StudentCard";
import { db } from "../../config/firebase";

import { styles } from "./styles";

export default function ListStudents({ navigation }) {
  const [students, setStudents] = useState([]);
  const [size, setSize] = useState(0);

  function goToRegisterStudents() {
    navigation.navigate("RegisterStudents");
  }

  function goToHome() {
    navigation.navigate("HomePage");
  }

  async function initStudents() {
    const querySnapshot = await getDocs(collection(db, "students"));
    const list = [];
    querySnapshot.forEach((doc) => {
      list.push({
        ...doc.data(),
        id: doc.id,
      });
      setSize(size + 1);
    });
    setStudents(list);
  }

  useEffect(() => {
    initStudents();
  }, [size]);

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
