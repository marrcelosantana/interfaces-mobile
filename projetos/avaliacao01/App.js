import { StyleSheet, View } from "react-native";
import Questao01 from "./src/components/Q01/Question01/Questao01";
import Questao02 from "./src/components/Q02/Questao02";
import Questao03 from "./src/components/Q03";
import Questao04 from "./src/components/Q04";
import Questao05 from "./src/components/Q05";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Questao01 /> */}
      <Questao02 />
      {/* <Questao03 /> */}
      {/* <Questao04 /> */}
      {/* <Questao05 /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
