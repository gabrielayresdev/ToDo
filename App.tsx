import { StatusBar, StyleSheet, Text, View } from "react-native";
import Home from "./src/screens/Home";

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#0D0D0D" />
      <Home />
    </>
  );
}
