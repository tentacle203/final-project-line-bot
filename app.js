require('dotenv').config();

const mqtt = require('mqtt');

const clientMQTT = mqtt.connect('mqtt://broker.emqx.io:1883');

// Define the topic and message
const topic = '/f3099158d631c34dbfd16955960ea4fe8637bce0dd8443aa81cf2d02bd6d67d5';

const line = require('@line/bot-sdk');
const express = require('express');

// create LINE SDK config from env variables
const config = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET,
};

// create LINE SDK client
const client = new line.Client(config);

// create Express app
// about Express itself: https://expressjs.com/
const app = express();

// register a webhook handler with middleware
// about the middleware, please refer to doc
app.post('/callback', line.middleware(config), (req, res) => {
  Promise
    .all(req.body.events.map(handleEvent))
    .then((result) => res.json(result))
    .catch((err) => {
      console.error(err);
      res.status(500).end();
    });
});

clientMQTT.on('connect', () => {
  console.log('Connected to MQTT broker');
});

// event handler
function handleEvent(event) {
  if (event.type !== 'message' || event.message.type !== 'text') {
    // ignore non-text-message event
    return Promise.resolve(null);
  }

  // create a echoing text message
  const echo = { type: 'text', text: "收到您的訊息囉" };

  clientMQTT.publish(topic, event.message, () => {
    console.log(`Message sent: ${event.message}`);
    clientMQTT.end(); // Close the connection after publishing
  });

  // use reply API
  return client.replyMessage(event.replyToken, echo);
}

// listen on port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});