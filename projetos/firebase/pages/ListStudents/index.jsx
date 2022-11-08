import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

export default function ListStudents(props) {
  function goToRegisterStudents() {
    props.navigation.navigate("RegisterStudents");
  }

  function goToHome() {
    props.navigation.navigate("HomePage");
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={goToRegisterStudents}>
        <Text>CADASTRAR</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={goToHome}>
        <Text>PÁGINA INICIAL</Text>
      </TouchableOpacity>
    </View>
  );
}
