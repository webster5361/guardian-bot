exports.run = (client, msg, [member, ...reason]) => {
  reason = reason.join(' ');
  const muteRole = msg.guild.roles.find(r => r.name.toLowerCase() === 'muted');
  if (!muteRole) return msg.reply('I cannot find a `Muted` role!');
  const muted = member.roles.has(muteRole.id);
  if (!muted) return msg.reply('This member is not muted!');
  if (muted && !reason) return msg.reply('You must supply a reason for the unmute!');
  if (!msg.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return msg.reply('I do not have the correct permissions.').catch(console.error);
  if (msg.author.id === member.id) return msg.reply('You can\'t mute yourself dumbass.');

  const embed = client.funcs.modlogs.createEmbed(client, msg.author, member.user, 'unmute', reason);
  const modLog = msg.guild.channels.find(c => c.name.toLowerCase() === client.guildConfs.get(msg.guild.id).modLog.data);
  let lastMessageID = 0;
  let chkContent = '';

  try {
    modLog.fetchMessages({ limit: 1 })
      .then((result) => {
        member.removeRole(muteRole);
        const lastMessage = result.first();
        chkContent = (lastMessage.embeds && lastMessage.embeds.length > 0) ? lastMessage.embeds[0].title : lastMessage.content;
        lastMessageID = chkContent.match(/Case #(\d+)/i)[1];
        let messageID = parseInt(lastMessageID);
        messageID += 1;
        const logger = `CASE# ${messageID} :: ${member.user.username} has been unmuted by ${msg.author.username} in the ${msg.guild.name} for the following reason: ${reason}`;
        const logDir = client.guildConfs.get(msg.guild.id).logDir.data;
        client.funcs.write_log(client, logDir, logger);
        client.funcs.log(logger, 'warn');
        member.send(`You have been unmuted by \`${msg.author.username}\` in the \`${msg.guild.name}\` Discord server for the following reason:\n\n\`\`\`diff\n- ${reason} -\`\`\`\nYou can now speak again in the channels. BE NICE!\n\nFor all inquiries about this matter, please contact a Moderator and reference: \`Case# ${messageID}\``);
      });
  } catch (err) { console.log(err); }
  client.funcs.modlogs.post(client, msg.guild, embed).catch(console.error);
  return 0;
};

exports.conf = {
  enabled: true,
  runIn: ['text'],
  aliases: [],
  permLevel: 2,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: 'unmute',
  description: 'Unmutes a user in the server.',
  usage: '<member:member> [reason:str]',
  usageDelim: ' ',
  extendedHelp: '',
};
