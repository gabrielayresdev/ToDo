import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { TaskT } from "../TaskList/Index";
import { RadioButton } from "react-native-paper";
import { styles } from "./styles";

type Props = {
  task: TaskT;
};

const Task = ({ task }: Props) => {
  const [checked, setChecked] = React.useState(task.completed);
  return (
    <View style={styles.container}>
      <RadioButton
        value="completed"
        color="#5E60CE"
        uncheckedColor="#4EA8DE"
        status={checked ? "checked" : "unchecked"}
        onPress={() => setChecked(!checked)}
      />
      <TouchableOpacity
        style={styles.titleContainer}
        onPress={() => setChecked(!checked)}
      >
        <Text style={[styles.title, checked && styles.completed]}>
          {task.title}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.remove}>
        <Image source={require("../../../assets/trash.png")} />
      </TouchableOpacity>
    </View>
  );
};

export default Task;
