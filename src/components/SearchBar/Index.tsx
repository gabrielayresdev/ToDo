import React from "react";
import { Image, TextInput, View } from "react-native";
import { styles } from "./styles";

const SearchBar = () => {
  const [focus, setFocus] = React.useState(false);
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, focus && styles.focused]}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      <View style={styles.button}>
        <Image source={require("../../../assets/plus.png")} />
      </View>
    </View>
  );
};

export default SearchBar;
