const fetch = require('node-fetch')
const telegram = function(msg) {
    var key_token = process.env.telegram_token;
    var key_channel = process.env.telegram_channel;
    if ( key_token == null || key_token == "x" ) {
        return;
    }
    var url = "https://api.telegram.org/bot" + key_token + "/sendMessage?chat_id=" + key_channel + "&text=" + encodeURIComponent(msg);
    fetch(url)
    .then(res => res.json())
    .then(json => console.log(json));
  }

  export default telegram;