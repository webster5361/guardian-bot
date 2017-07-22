exports.run = (client, msg, [member, ...reason]) => {
  reason = reason.join(' ');
  if (!reason) return msg.reply('You must supply a reason for the warning!');

  const embed = client.funcs.modlogs.createEmbed(client, msg.author, member.user, 'warn', reason);

  const modLog = msg.guild.channels.find(c => c.name.toLowerCase() === client.guildConfs.get(msg.guild.id).modLog.data);
  let lastMessageID = 0;
  let chkContent = '';
  let messageID = 0;

  try {
    modLog.fetchMessages({ limit: 1 })
      .then((result) => {
        const lastMessage = result.first();
        // console.log(lastMessage);
        if (!lastMessage) {
          messageID = 1;
        } else {
          chkContent = (lastMessage.embeds && lastMessage.embeds.length > 0) ? lastMessage.embeds[0].title : lastMessage.content;
          lastMessageID = chkContent.match(/Case #(\d+)/i)[1];
          messageID = parseInt(lastMessageID);
          messageID += 1;
        }
        console.log(messageID);
        const logger = `CASE# ${messageID} :: ${member.user.tag} [ ${member.id} ] has been given a warning by ${msg.author.username} [ ${msg.author.id} ] in the ${msg.guild.name} for the following reason: ${reason}`;
        const logDir = client.guildConfs.get(msg.guild.id).logDir.data;
        client.funcs.write_log(client, logDir, msg.guild.id, logger);
        client.funcs.log(logger, 'warn');
        member.send(`You have been given a warning by \`${msg.author.username}\` in the \`${msg.guild.name}\` Discord server for the following reason:\n\n\`\`\`diff\n- ${reason} -\`\`\`\nRepeated violations will result in your removal from this server.\n\nFor all inquiries about this matter, please contact a Moderator and reference: \`Case# ${messageID}\``);

        client.funcs.sqlLog(client, msg.guild.id, messageID, member.id, member.user.tag, msg.author.id, msg.author.tag, 'Warning', reason);
      });
  } catch (err) { console.log(err); }
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
  name: 'warn',
  description: 'Warns a user on the server.',
  usage: '<member:member> [reason:str]',
  usageDelim: ' ',
  extendedHelp: '',
};
