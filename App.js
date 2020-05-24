import React from "react";
import { BrowserRouter } from "react-router-dom";
import { NativeRouter, Route } from "react-router-native";
import { SafeAreaView, StyleSheet } from "react-native";

import Welcome from "./components/Welcome";
import Table from "./components/Table";

export default function App() {
  const typeOfApp = () => {
    if (typeof document != "undefined") {
      // I'm on the web!
      console.log("here");
      return (
        <BrowserRouter>
          <SafeAreaView style={styles.mainArea}>
            <Route exact path="/" component={Welcome} />
            <Route path="/new_game" component={Table} />
          </SafeAreaView>
        </BrowserRouter>
      );
    } else if (
      typeof navigator != "undefined" &&
      navigator.product == "ReactNative"
    ) {
      return (
        <NativeRouter>
          <SafeAreaView style={styles.mainArea}>
            <Route exact path="/" component={Welcome} />
            <Route path="/new_game" component={Table} />
          </SafeAreaView>
        </NativeRouter>
      );
      // I'm in react-native
    } else {
      // I'm in node js
    }
  };
  return typeOfApp();
}

const styles = StyleSheet.create({
  mainArea: {
    backgroundColor: "green",
    flex: 1,
  },
});
