exports.init = (client) => {
};

exports.run = (client, msg, [numMessages]) => {

  let messagecount = parseInt(msg);
  msg.channel.fetchMessages({
    limit: messagecount
  }).then(messages => msg.channel.bulkDelete(messages));
};

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: [],
  permLevel: 10,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "purge",
  description: "Purges X amount of messages from channel.",
  usage: "<numMessages:int>",
  usageDelim: " ",
  extendedHelp: "",
};
