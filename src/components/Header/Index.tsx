import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../../assets/Logo.png")} />
    </View>
  );
};

export default Header;
