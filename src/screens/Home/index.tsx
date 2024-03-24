import React from "react";
import { View } from "react-native";
import Header from "../../components/Header/Index";
import SearchBar from "../../components/SearchBar/Index";
import { styles } from "./styles";
import TaskList from "../../components/TaskList/Index";
import Task from "../../types/Task";

const Home = () => {
  const [tasks, setTasks] = React.useState<Task[]>([]);
  console.log(tasks);
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.moveUp}>
        <SearchBar setTasks={setTasks} />
      </View>
      <TaskList tasks={tasks} setTasks={setTasks} />
    </View>
  );
};

export default Home;
