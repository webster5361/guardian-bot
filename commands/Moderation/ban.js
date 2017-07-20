exports.run = (client, msg, [member, ...reason]) => {
  reason = reason.join(' ');
  if (!reason) return msg.reply('You must supply a reason for the ban!');
  if (!msg.guild.member(member).bannable) return msg.reply('I cannot ban that member');

  const embed = client.funcs.modlogs.createEmbed(client, msg.author, member.user, 'ban', reason);
  const modLog = msg.guild.channels.find(c => c.name.toLowerCase() === client.guildConfs.get(msg.guild.id).modLog.data);
  let lastMessageID = 0;
  let chkContent = '';

  try {
    modLog.fetchMessages({ limit: 1 })
      .then((result) => {
        const lastMessage = result.first();
        chkContent = (lastMessage.embeds && lastMessage.embeds.length > 0) ? lastMessage.embeds[0].title : lastMessage.content;
        lastMessageID = chkContent.match(/Case #(\d+)/i)[1];
        let messageID = parseInt(lastMessageID);
        messageID += 1;
        const logger = `CASE# ${messageID} :: ${member.user.username} has been banned by ${msg.author.username} in the ${msg.guild.name} for the following reason: ${reason}`;
        const logDir = client.guildConfs.get(msg.guild.id).logDir.data;
        client.funcs.write_log(client, logDir, logger);
        client.funcs.log(logger, 'warn');
        member.send(`You have been banned by \`${msg.author.username}\` from the \`${msg.guild.name}\` Discord server for the following reason:\n\n\`\`\`diff\n- ${reason} -\`\`\`\nThere is no reason to act like this in someone's Discord server.\n\nFor all inquiries about this matter, please contact a Moderator and reference: \`Case# ${messageID}\``);

        setTimeout(() => {
          msg.channel.send('Ban successful!');
          msg.guild.ban(member, 7);
        }, 250);
        client.funcs.sqlLog(client, msg.guild.id, messageID, member.id, member.user.tag, msg.author.id, msg.author.tag, 'Ban', reason);
      });
  } catch (err) { client.funcs.log(err, 'error'); }
  client.funcs.modlogs.post(client, msg.guild, embed).catch(console.error);
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
  name: 'ban',
  description: 'Bans a user from the server.',
  usage: '<member:member> [reason:str]',
  usageDelim: ' ',
  extendedHelp: '',
};
