import Echo from "laravel-echo";
import Pusher from "pusher-js";

const pusher = new Pusher("dagergdfrgdfhgdafh", {
  cluster: "mt1",
  forceTLS: false,
  wsHost: "localhost:8000",
  wsPort: 6001,
});

const echo = new Echo({
  broadcaster: "pusher",
  key: "dagergdfrgdfhgdafh",
  cluster: "mt1",
  forceTLS: false,
  wsPort: 6001,
  wsHost: "localhost:8000",
  disableStats: true,
  pusher: pusher,
  // broadcaster: "socket.io",
});

export default echo;
