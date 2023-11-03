import Echo from "laravel-echo";
import Pusher from "pusher-js";

// Create a new instance of the Echo class with the specified broadcaster, key, and Pusher client options
const echo = new Echo({
  broadcaster: "pusher",
  key: "2fbf7ea3d2be305d21c4",
  client: new Pusher("2fbf7ea3d2be305d21c4", {
    wsHost: "localhost",
    wsPort: 6001,
    cluster: "ap1",
    disableStats: true,
    forceTLS: true,
  }),
});

export default echo;
