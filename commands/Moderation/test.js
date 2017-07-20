exports.run = (client, msg, [member, ...reason]) => {
  reason = reason.join(' ');

  // (Client, Msg, Member, TimeStamp, CaseNumber, Action, Reason)
  // client.funcs.sqlLog(client, msg, member, ?, ?, 'warn', reason);
  const test = 2;

  console.log(msg.author.id);
  console.log(msg.author.tag);
  console.log(member);
  console.log(member.send('test'));

  //client.funcs.sqlLog(client, msg, member, test, 'warn', reason);

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
  name: 'test',
  description: 'test',
  usage: '<member:str> [reason:str]',
  usageDelim: ' ',
  extendedHelp: '',
};
