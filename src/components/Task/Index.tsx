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
  function toggleCompletion() {
    setTasks((prevValue) => {
      const index = prevValue.findIndex((item) => item.id === task.id);
      prevValue[index].completed = !prevValue[index].completed;
      return [...prevValue];
    });
  }
  return (
    <View style={styles.container}>
      <RadioButton
        value="completed"
        color="#5E60CE"
        uncheckedColor="#4EA8DE"
        status={task.completed ? "checked" : "unchecked"}
        onPress={toggleCompletion}
      />
      <TouchableOpacity
        style={styles.titleContainer}
        onPress={toggleCompletion}
      >
        <Text style={[styles.title, task.completed && styles.completed]}>
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
