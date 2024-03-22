import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    gap: 4,
    paddingLeft: 24,
    paddingRight: 24,
  },
  input: {
    flex: 1,
    height: 54,
    backgroundColor: "#262626",
    color: "#F2F2F2",
    fontSize: 16,
    borderRadius: 6,
    paddingLeft: 16,
    paddingRight: 16,
    overflow: "visible",
  },
  focused: {
    borderColor: "#5E60CE",
    borderWidth: 1,
  },
  button: {
    backgroundColor: "#1E6F9F",
    aspectRatio: 1.0,
    height: 54,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },
});
