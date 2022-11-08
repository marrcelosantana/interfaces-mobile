import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

export default function ListTeachers(props) {
  function goToRegisterTeachers() {
    props.navigation.navigate("RegisterTeachers");
  }

  function goToHome() {
    props.navigation.navigate("HomePage");
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={goToRegisterTeachers}>
        <Text>CADASTRAR</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={goToHome}>
        <Text>PÁGINA INICIAL</Text>
      </TouchableOpacity>
    </View>
  );
}
