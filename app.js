var linebot = require('linebot');

var bot = linebot({
    channelId: '2006641202',
    channelSecret: 'f504b460adc0fc41a844eed917f7d85d',
    channelAccessToken: 'S7aeIGo8DS+uO/xvm6KNj83Y5+CDeTiOcdd++Pp0pn24y+JBdN51+8LcQd/pQoLWi9TGze0QflztQEtiRH4ZuVMNmtjL95Srb5f1twBYfsgDP7yzwiPbAy5J8JjpVjLhi/epkg0E/VxZhVgZHjDm0QdB04t89/1O/w1cDnyilFU='
});

bot.on('message', function (event) {
    // event.message.text是使用者傳給bot的訊息
    // 準備要回傳的內容
    var replyMsg = `你剛剛是說${event.message.text}嗎？`;
    // 透過event.reply(要回傳的訊息)方法將訊息回傳給使用者
    event.reply(replyMsg).then(function (data) {
        // 當訊息成功回傳後的處理
    }).catch(function (error) {
        // 當訊息回傳失敗後的處理
    });
});

bot.listen('/linewebhook', 3000, function () {
    console.log('LINE BOT IS RUNNING');
});