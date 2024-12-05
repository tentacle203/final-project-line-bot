var linebot = require('linebot');

var bot = linebot({
    channelId: CHANNEL_ID,
    channelSecret: CHANNEL_SECRET,
    channelAccessToken: CHANNEL_ACESS_TOKEN
});

bot.on('message', function (event) {
    event.reply(event.message.text).then(function (data) {
      // 當訊息成功回傳後的處理
    }).catch(function (error) {
      // 當訊息回傳失敗後的處理
    });
  });

bot.listen('/linewebhook', 100);