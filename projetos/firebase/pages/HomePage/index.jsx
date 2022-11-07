import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

export default function HomePage(props) {

  function goToRegister(){
    props.navigation.navigate("Register");
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={goToRegister}>
        <Text>CADASTRAR ESTUDANTES</Text>
      </TouchableOpacity>
    </View>
  );
}
