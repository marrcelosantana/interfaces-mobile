import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },

  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
  },

  buttonClose: {
    backgroundColor: "#ff1f1f",
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },

  modalText: {
    marginBottom: 30,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
  },

  details: {
    width: "100%",
    marginBottom: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
