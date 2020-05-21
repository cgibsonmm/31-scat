import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { NativeRouter, Route } from "react-router-native";

import Welcome from "./components/Welcome";
import Table from "./components/Table";

export default function App() {
  return (
    <NativeRouter>
      <SafeAreaView style={styles.mainArea}>
        <Route exact path="/" component={Welcome} />
        <Route path="/new_game" component={Table} />
      </SafeAreaView>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  mainArea: {
    backgroundColor: "green",
    flex: 1,
  },
});
