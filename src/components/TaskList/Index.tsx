import React from "react";
import { FlatList, Text, View } from "react-native";
import { styles } from "./styles";
import Task from "../Task/Index";

const TaskList = ({ tasks, setTasks }) => {
  return (
    <View style={styles.container}>
      <View style={styles.counters}>
        <View style={styles.counter}>
          <Text style={[styles.key, styles.blue]}>Criadas</Text>
          <Text style={styles.count}>{tasks.length}</Text>
        </View>
        <View style={styles.counter}>
          <Text style={[styles.key, styles.purple]}>Concluídas</Text>
          <Text style={styles.count}>
            {tasks.reduce((total, task) => {
              return total + (task.completed ? 1 : 0);
            }, 0)}
          </Text>
        </View>
      </View>
      <FlatList
        data={tasks}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => <Task task={item} />}
        showsVerticalScrollIndicator={false}
        style={styles.list}
      ></FlatList>
    </View>
  );
};

export default TaskList;
