import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import Register from "./pages/Register";
import Routes from "./routes";

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Routes />
    </NavigationContainer>
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
