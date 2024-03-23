import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#262626",
    marginBottom: 8,
    borderRadius: 8,
    padding: 4,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    color: "#F2F2F2",
  },
  completed: {
    textDecorationLine: "line-through",
    color: "#808080",
  },
  remove: {
    padding: 8,
  },
});
