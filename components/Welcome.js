import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Link } from "react-router-native";

const Welcome = () => {
  return (
    <View>
      <Text>Welcome</Text>

      <Link to="/new_game" component={TouchableOpacity}>
        <Text>New Game</Text>
      </Link>
    </View>
  );
};

export default Welcome;
