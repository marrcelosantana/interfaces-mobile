import { Text, TouchableOpacity, View } from "react-native";

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
      <TouchableOpacity style={styles.button} onPress={goToRegisterStudents}>
        <Text style={styles.buttonText}>CADASTRAR ESTUDANTES</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={goToRegisterTeachers}>
        <Text style={styles.buttonText}>CADASTRAR PROFESSORES</Text>
      </TouchableOpacity>
    </View>
  );
}
