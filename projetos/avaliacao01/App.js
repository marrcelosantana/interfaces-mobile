import { StyleSheet, View } from "react-native";
import Questao01 from "./src/components/Q01/Question01/Questao01";

export default function App() {
  return (
    <View style={styles.container}>
      <Questao01 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
