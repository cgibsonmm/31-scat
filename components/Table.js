import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Link } from "react-router-native";

import Deck from "../lib/deck";
import Hand from "./PlayerHand";
const Table = () => {
  let deck = new Deck();

  let playerHands = deck.dealToPlayers(1);

  return (
    <>
      <Text style={styles.large}>Table</Text>
      <Link to="/" component={TouchableOpacity}>
        <Text>Go Home</Text>
      </Link>

      <View style={styles.table}>
        <Text>Hello</Text>
        {playerHands.map((playerHand, index) => (
          <Hand hand={playerHand} index={index} />
        ))}
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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  large: {
    fontSize: 40,
    textAlign: "center",
  },
});

export default Table;
