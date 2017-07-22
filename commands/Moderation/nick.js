exports.run = (client, msg, [member, ...nickname]) => {
  nickname = nickname.join(' ');
  if (nickname) {
    member.setNickname(nickname);
    msg.channel.send('Nickname updated');
  } else {
    member.setNickname(nickname);
    msg.channel.send('Nickname removed');
  }
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
  name: 'nick',
  description: 'Changes users nickname. Leave blank to remove nick and use default name.',
  usage: '<member:member> [nickname:str]',
  usageDelim: ' ',
  extendedHelp: '',
};
