import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: "1rem",
    width: "100%",
    height: "95rem",
    padding: "2%",
  },

  counterContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    border: "1px solid #2196f3",
    borderRadius: "5px",
  },

  cityContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-center",
    padding: "2%",
    gap: "10px",
  },

  city: {
    fontWeight: "bold",
    fontSize: "1rem",
    fontFamily: "sans-serif",
  },

  counter: {
    fontSize: "18px",
  },

  winnerContainer: {
    marginTop: "4%",
  },

  winner: {
    marginTop: "4%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  winnerName: {
    fontSize: "1.5rem",
    fontFamily: "sans-serif",
  },
});
