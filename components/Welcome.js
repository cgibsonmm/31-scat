import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from "react-router-native";

const Welcome = () => {
  return (
    <View>
      <Text>Welcome</Text>

      <Link style={styles.button} to="/new_game" component={TouchableOpacity}>
        <Text>New Game</Text>
      </Link>
      <Link style={styles.button} to="/socket" component={TouchableOpacity}>
        <Text>Connect</Text>
      </Link>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  button: {
    padding: 20,
  },
});
