import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    gap: "1rem",
    width: "100%",
    padding: "10%"
  },
  inputContainer: {
    display: "flex",
    gap: "15px"
  },
  title: {
    fontSize: "24px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    marginBottom: "1rem"
  },
  name: {
    fontSize: "18px",
  },
  input: {
    height: "3rem",
    backgroundColor: "#ccc",
    padding: "5%",
    width: "100%"
  },
  button: {
    height: "3rem",
    backgroundColor: "#7b61a2",
    color: "white",
    fontWeight: "bold",
    border: "0",
    borderRadius: "5px",
    fontSize: "22px",
    marginTop: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});