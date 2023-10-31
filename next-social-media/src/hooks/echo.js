import Echo from "laravel-echo";
import Pusher from "pusher-js";

// Create a new instance of the Echo class with the specified broadcaster, key, and Pusher client options
const echo = new Echo({
  broadcaster: "pusher",
  key: "mydsfgdskey",
  client: new Pusher("mydsfgdskey", {
    wsHost: "localhost",
    wsPort: 6001,
    cluster: "mt1",
    disableStats: true,
    forceTLS: false,
  }),
});

export default echo;
