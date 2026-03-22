const notify = require('./sendNotify');

console.log("🚀 开始测试 WebHook 推送...");
notify.sendNotify("WebHook测试标题", "这是一条来自青龙的专属测试消息！\n如果能在企业微信看到我，说明大功告成了！");