function connect() {
  return openSocket(URL, { forceNode: true });
}

function sub(socket) {
  console.log("herre");
  socket.emit("sub");
}

module.exports = {
  connect,
  sub,
};
