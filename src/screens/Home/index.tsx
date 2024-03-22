import React from "react";
import { View } from "react-native";
import Header from "../../components/Header/Index";
import SearchBar from "../../components/SearchBar/Index";
import { styles } from "./styles";

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.moveUp}>
        <SearchBar />
      </View>
    </View>
  );
};

export default Home;
