import React from "react";
import Images from "../assets/PNG-cards-1.3";

import { View, Text, StyleSheet, Image } from "react-native";

const PlayerHand = ({ hand, index }) => {
  const handleSelect = (e) => {
    console.log(e);
  };
  return (
    <View style={index == 2 ? styles.hand : styles.otherHand}>
      {hand.map((card) => (
        <>
          <Image
            onPress={handleSelect}
            style={styles.image}
            source={index === 0 ? Images[card.image] : Images["card_back"]}
          />
        </>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  hand: {
    display: "flex",
    flexDirection: "row",
  },
  image: {
    height: 150,
    flex: 4,
    resizeMode: "contain",
  },
  otherHand: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "black",
    position: "relative",
  },
});

export default PlayerHand;
