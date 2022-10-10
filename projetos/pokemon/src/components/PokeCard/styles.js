import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "60%",
    height: "20rem",
    backgroundColor: "#efeff4",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "8px",
    boxShadow: "2px 2px #bdb9b8",
    gap: "20px",
  },

  pokeInfo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
  },

  id: {
    fontSize: "18px",
    fontSize: 18,
    fontWeight: "bold",
  },

  name: {
    fontSize: 20,
    fontWeight: "bold",
  },

  types: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    textTransform: "uppercase",
  },

  typeName: {
    color: "#939393",
    fontWeight: "bold"
  },

  buttons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
  },
});
