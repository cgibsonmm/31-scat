import React, { useEffect, useState } from "react";
import openSocket from "socket.io-client";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
} from "react-native";
import { Link, Redirect } from "react-router-native";

const Connect = () => {
  const [inRoom, setInRoom] = useState(false);
  const [beep, setBeep] = useState(0);
  const [closeRoom, setCloseRoom] = useState(false);
  const [socket, setSocket] = useState(null);
  const [input, setInput] = useState("");
  const [chat, setChat] = useState([]);

  useEffect(() => {
    if (!socket) {
      setSocket(
        openSocket("http://localhost:3003/game", {
          forceNode: true,
        })
      );
    }

    return () => {
      if (socket) {
        setInRoom(false);
        socket.close();
      }
    };
  }, []);

  useEffect(() => {
    if (!inRoom && socket) {
      socket.emit("sub");
      setInRoom(true);
    }

    if (socket) {
      socket.on("beep", (data) => {
        setBeep(data);
      });

      socket.on("chatHX", (payload) => {
        setChat(payload.list);
      });
    }
  });

  const close = () => {
    socket.close();
    setCloseRoom(true);
  };

  const send = () => {
    socket.emit("chat", { message: input });
    setInput("");
  };

  if (closeRoom) {
    return <Redirect to="/" />;
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      onPress={Keyboard.dismiss}
    >
      <TouchableOpacity onPress={close}>
        {/* <Link to="/"> */}
        <Text>home</Text>
        {/* </Link> */}
      </TouchableOpacity>
      <Text>{beep}</Text>

      {chat.map((mess, id) => (
        <Text key={id}>
          {mess.timeCreated}
          {mess.message}
        </Text>
      ))}
      <TextInput
        placeholder="Message"
        value={input}
        onChange={(e) => setInput(e.nativeEvent.text)}
      />
      <TouchableOpacity style={styles.button} onPress={send}>
        <Text>Send</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default Connect;

const styles = StyleSheet.create({
  button: {
    padding: 20,
    backgroundColor: "grey",
  },
});
