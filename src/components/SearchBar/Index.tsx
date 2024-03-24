import React, { SetStateAction } from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Task from "../../types/Task";

type Props = {
  setTasks: React.Dispatch<SetStateAction<Task[]>>;
};

const SearchBar = ({ setTasks }: Props) => {
  const [focus, setFocus] = React.useState(false);
  const [value, setValue] = React.useState("");
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, focus && styles.focused]}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        value={value}
        onChangeText={setValue}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setTasks((prevValue) => [
            ...prevValue,
            {
              id: prevValue[prevValue.length - 1].id + 1,
              title: value,
              completed: false,
            },
          ]);
          setValue("");
        }}
      >
        <Image source={require("../../../assets/plus.png")} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
