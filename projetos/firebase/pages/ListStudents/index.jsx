import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-web";
import { db } from "../../config/firebase";

import { styles } from "./styles";

export default function ListStudents({ navigation }) {
  const [students, setStudents] = useState([]);

  function goToRegisterStudents() {
    navigation.navigate("RegisterStudents");
  }

  function goToHome() {
    navigation.navigate("HomePage");
  }

  async function initStudents() {
    const querySnapshot = await getDocs(collection(db, "students"));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, doc.data());
      setStudents({
        ...doc.data(),
        id: doc.id,
      });
    });
  }

  useEffect(() => {
    initStudents();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={students}
        renderItem={({ item }) => {
          <Text>item.name</Text>;
        }}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity style={styles.button} onPress={goToRegisterStudents}>
        <Text>CADASTRAR MAIS</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={goToHome}>
        <Text>PÁGINA INICIAL</Text>
      </TouchableOpacity>
    </View>
  );
}
