import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
  },

  inputsContainer: {
    width: "100%",
    marginTop: 30,
    display: "flex",
    gap: "15px",
  },

  title: {
    fontSize: "24px",
    width: "100%",
    textAlign: "center",
    fontWeight: "bold",
  },

  name: {
    fontSize: "16px",
    marginBottom: 3,
  },

  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#ccc3",
    padding: "5%",
    width: "100%",
    borderRadius: "5px",
    marginBottom: 25,
  },

  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#ccc9",
    color: "#ffff",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "5px",
  },
});
