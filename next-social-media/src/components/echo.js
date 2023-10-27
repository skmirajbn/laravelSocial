"use client";
import Echo from "laravel-echo";
import Pusher from "pusher-js";

const pusher = new Pusher("local", {
  cluster: "mt1",
  forceTLS: false,
  wsHost: "localhost:8000",
  wsPort: 6001,
  broadcaster: "pusher",
});

const echo = new Echo({
  broadcaster: "pusher",
  key: "local",
  cluster: "mt1",
  forceTLS: false,
  wsPort: 6001,
  wsHost: "localhost:8000",
  disableStats: true,
  // pusher: pusher,
  client: pusher,
  // broadcaster: "socket.io",
});

window.echo = echo;
export default echo;
