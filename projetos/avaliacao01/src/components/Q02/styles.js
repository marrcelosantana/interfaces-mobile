import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },

  inputs: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    backgroundColor: "#eeeeee",
    padding: "3%",
    width: "60%",
    borderRadius: 3,
    marginBottom: 5,
  },

  buttons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    padding: "4%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#51c4e7",
    marginLeft: 10,
    borderRadius: 3,
    marginTop: 20,
  },

  result: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
  },
});
