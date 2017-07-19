exports.init = (client) => {
};

exports.run = (client, msg, [member, ...reason]) => {
  reason = reason.join(' ');

  if (!reason) return msg.reply('You must supply a reason for the kick!');

  if (!msg.guild.member(member).kickable) return msg.reply('I cannot kick that member');

  msg.guild.member(member).kick();
  const embed = client.funcs.modlogs.createEmbed(client, msg.author, member.user, 'kick', reason);
  client.funcs.modlogs.post(client, msg.guild, embed).catch(console.error);
  msg.channel.send('Kick successful!');

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
  name: 'kick',
  description: 'Kicks a user from the server.',
  usage: '<member:member> [reason:str]',
  usageDelim: ' ',
  extendedHelp: '',
};
