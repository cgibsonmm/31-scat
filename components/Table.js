import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from "react-router-native";

const Table = () => {
  return (
    <>
      <Text style={styles.large}>Table</Text>
      <Link to="/" component={TouchableOpacity}>
        <Text>Go Home</Text>
      </Link>

      <View style={styles.table}>
        <Text>Hello</Text>
      </View>
    </>
  );
};

let styles = StyleSheet.create({
  table: {
    backgroundColor: "#388E3C",
    borderStyle: "solid",
    borderWidth: 10,
    borderColor: "#4E342E",
    margin: 40,
    flex: 1,
    borderRadius: 100,
  },
  large: {
    fontSize: 40,
    textAlign: "center",
  },
});

export default Table;
