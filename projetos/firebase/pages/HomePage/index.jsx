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
        <Text>CADASTRAR ESTUDANTES</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={goToRegisterTeachers}>
        <Text>CADASTRAR PROFESSORES</Text>
      </TouchableOpacity>
    </View>
  );
}
