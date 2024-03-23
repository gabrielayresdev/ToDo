import React from "react";
import { View } from "react-native";
import Header from "../../components/Header/Index";
import SearchBar from "../../components/SearchBar/Index";
import { styles } from "./styles";
import TaskList from "../../components/TaskList/Index";

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.moveUp}>
        <SearchBar />
      </View>
      <TaskList />
    </View>
  );
};

export default Home;
