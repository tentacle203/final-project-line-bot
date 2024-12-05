var linebot = require('linebot');

var bot = linebot({
    channelId: '2006641202',
    channelSecret: 'f504b460adc0fc41a844eed917f7d85d',
    channelAccessToken: 'S7aeIGo8DS+uO/xvm6KNj83Y5+CDeTiOcdd++Pp0pn24y+JBdN51+8LcQd/pQoLWi9TGze0QflztQEtiRH4ZuVMNmtjL95Srb5f1twBYfsgDP7yzwiPbAy5J8JjpVjLhi/epkg0E/VxZhVgZHjDm0QdB04t89/1O/w1cDnyilFU='
});

bot.on('message', function(event) {
    if (event.message.type = 'text') {
        var msg = event.message.text;
        event.reply(msg).then(function(data) {
            // success
            console.log(msg);
        }).catch(function(error) {
            // error
            console.log('ERROR');
        });
    }
});

bot.listen('/linewebhook', 3000, function () {
    console.log('LINE BOT IS RUNNING');
});