import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Link, Redirect } from "react-router-native";

import Hand from "./PlayerHand";
import openSocket from "socket.io-client";
const URL = "http://192.168.1.5:3003/";

const Table = () => {
  const [socket, setSocket] = useState(null);
  const [inRoom, setInRoom] = useState(false);
  const [leftRoom, setLeftRoom] = useState(false);
  const [myHand, setMyHand] = useState([]);

  useEffect(() => {
    console.log("---");
    console.log(inRoom);
    if (!socket) {
      setSocket(openSocket(URL, { forceNode: true }));
    }

    return () => {
      if (socket) {
        socket.close();
        setInRoom(false);
      }
    };
  }, []);

  useEffect(() => {
    console.log("r");
    if (!inRoom && socket) {
      console.log("here");
      socket.emit("sub");
      setInRoom(true);
    }

    if (socket) {
      socket.on("m", (pay) => {
        console.log(pay);
      });

      if (myHand.length === 0) {
        socket.on("receiveHand", (p) => {
          setMyHand(p);
        });
      }
    }
  });

  const leaveRoom = () => {
    socket.close();
    setLeftRoom(true);
  };

  const playGame = () => {
    setMyHand([]);
    socket.emit("newGame");
  };

  if (leftRoom) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Text style={styles.large}>Table</Text>
      <TouchableOpacity onPress={leaveRoom}>
        <Text>Go Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={playGame}>
        <Text>playGame</Text>
      </TouchableOpacity>

      <View style={styles.table}>
        <Text>Hello</Text>
        <Hand hand={myHand} index={0} />
        {/* {playerHands.map((playerHand, index) => (
          <Hand hand={playerHand} index={index} key={`card-${index}`} />
        ))} */}
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
