import React from "react";
import { BrowserRouter } from "react-router-dom";
import { NativeRouter, Route } from "react-router-native";
import { SafeAreaView, StyleSheet, Platform, StatusBar } from "react-native";

import Welcome from "./components/Welcome";
import Table from "./components/Table";
import Connect from "./components/Connect";

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
            <Route path="/socket" component={Connect} />
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
    paddingTop: Platform.OS === "android" ? 50 : 0,
  },
  button: {
    padding: 10,
    backgroundColor: "grey",
  },
});
