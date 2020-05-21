import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Link } from "react-router-native";

import Images from "../assets/PNG-cards-1.3";

import Deck from "../lib/deck";
const Table = () => {
  let deck = new Deck();

  let playerHands = deck.dealToPlayers(3);

  return (
    <>
      <Text style={styles.large}>Table</Text>
      <Link to="/" component={TouchableOpacity}>
        <Text>Go Home</Text>
      </Link>

      <View style={styles.table}>
        <Text>Hello</Text>
        {playerHands.map((playerHand, index) => (
          <View style={styles.hand}>
            {playerHand.map((card) => (
              <>
                <Image
                  style={styles.image}
                  source={
                    index === 2 ? Images[card.image] : Images["card_back"]
                  }
                />
              </>
            ))}
          </View>
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
  image: {
    height: 150,
    flex: 4,
    resizeMode: "contain",
  },
  hand: {
    display: "flex",
    flexDirection: "row",
  },
});

export default Table;
