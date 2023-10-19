import Echo from "laravel-echo";
import Pusher from "pusher-js";

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
