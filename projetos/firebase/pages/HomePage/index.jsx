import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./styles";

export default function HomePage({ navigation }) {
  function goToRegisterStudents() {
    navigation.navigate("RegisterStudents");
  }

  function goToRegisterTeachers() {
    navigation.navigate("RegisterTeachers");
  }

  return (
    <View style={styles.container}>
      <Ionicons
        name="logo-firebase"
        size={250}
        color="#f7c630"
        style={styles.icon}
      />
      <TouchableOpacity style={styles.button} onPress={goToRegisterStudents}>
        <Text style={styles.buttonText}>CADASTRAR ESTUDANTES</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={goToRegisterTeachers}>
        <Text style={styles.buttonText}>CADASTRAR PROFESSORES</Text>
      </TouchableOpacity>
    </View>
  );
}
