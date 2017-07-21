exports.run = (client, msg, [member, ...reason]) => {
  reason = reason.join(' ');

  let caseNumber = 0;
  var casenum = client.funcs.db_getCaseNum(msg.guild.id, function(data) {
    caseNumber = data;
  });
  console.log(caseNumber);
  // if (!reason) return msg.reply('You must supply a reason for the kick!');
  //
  // if (!member) return msg.reply('You must supply a User Resolvable, such as a user id.').catch(console.error);
  // msg.guild.unban(member);
  // msg.channel.send('Unban successful!');
  return 0;
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
  name: 'unban',
  description: 'Unbans a user from the server.',
  usage: '<member:str> [reason:str]',
  usageDelim: ' ',
  extendedHelp: '',
};
