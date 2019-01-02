export function createWebsocket(options = {}) {
  if (!window.WebSocket) {
    window.WebSocket = window.MozWebSocket;
  }
  if (window.WebSocket) {
    return new WebSocket("ws://127.0.0.1:8080/websocket");
    // socket.onmessage = (event) => {console.log(event); };
    // socket.onopen = (event) => {console.log(event); };
    // socket.onclose = (event) => {console.log(event); };
    // if (socket.readyState == WebSocket.OPEN) { socket.send(message); }
  }
  return null;
}
