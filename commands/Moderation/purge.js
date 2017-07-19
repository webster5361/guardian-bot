exports.run = (client, msg, [numMessages]) => {
  const messagecount = parseInt(numMessages);
  msg.channel.fetchMessages({
    limit: messagecount,
  }).then(messages => msg.channel.bulkDelete(messages));
};

exports.conf = {
  enabled: true,
  runIn: ['text'],
  aliases: [],
  permLevel: 10,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: 'purge',
  description: 'Purges X amount of messages from channel.',
  usage: '<numMessages:int>',
  usageDelim: ' ',
  extendedHelp: '',
};
