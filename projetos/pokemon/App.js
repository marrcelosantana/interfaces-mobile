import { StyleSheet, View } from "react-native";
import Header from "./src/components/Header";
import PokeCard from "./src/components/PokeCard";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <PokeCard />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  content: {
    width: "100%",
    marginTop: "2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
