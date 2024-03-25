import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import TaskT from "../../types/Task";
import { RadioButton } from "react-native-paper";
import { styles } from "./styles";

type Props = {
  task: TaskT;
  setTasks: React.Dispatch<React.SetStateAction<TaskT[]>>;
};

const Task = ({ task, setTasks }: Props) => {
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

      <TouchableOpacity
        style={styles.remove}
        onPress={() =>
          setTasks((prevValue) => prevValue.filter((t) => t.id !== task.id))
        }
      >
        <Image source={require("../../../assets/trash.png")} />
      </TouchableOpacity>
    </View>
  );
};

export default Task;
