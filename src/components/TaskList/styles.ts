import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  counters: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  counter: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  key: {
    fontSize: 14,
    fontWeight: "bold",
  },
  blue: {
    color: "#4EA8DE",
  },
  purple: {
    color: "#8284FA",
  },
  count: {
    backgroundColor: "#333333",
    color: "#D9D9D9",
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 2,
    paddingBottom: 2,
    borderRadius: 100,

    textAlign: "center",
  },
  list: {
    marginTop: 20,
  },
});
