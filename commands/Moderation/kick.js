exports.run = (client, msg, [member, ...reason]) => {
  reason = reason.join(' ');
  if (!reason) return msg.reply('You must supply a reason for the kick!');
  if (!msg.guild.member(member).kickable) return msg.reply('I cannot kick that member');

  const embed = client.funcs.modlogs.createEmbed(client, msg.author, member.user, 'kick', reason);

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
        const logger = `CASE# ${messageID} :: ${member.user.username} has been kicked by ${msg.author.username} in the ${msg.guild.name} for the following reason: ${reason}`;
        const logDir = client.guildConfs.get(msg.guild.id).logDir.data;
        client.funcs.write_log(client, logDir, logger);
        client.funcs.log(logger, 'warn');
        member.send(`You have been kicked by \`${msg.author.username}\` from the \`${msg.guild.name}\` Discord server for the following reason:\n\n\`\`\`diff\n- ${reason} -\`\`\`\nYou are allowed to return to the server, but further violations on your part will result in a ban.\n\nFor all inquiries about this matter, please contact a Moderator and reference: \`Case# ${messageID}\``);

        setTimeout(() => {
          msg.channel.send('Kick successful!');
          msg.guild.member(member).kick();
        }, 250);
        client.funcs.sqlLog(client, msg.guild.id, messageID, member.id, member.user.tag, msg.author.id, msg.author.tag, 'Kick', reason);
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
  name: 'kick',
  description: 'Kicks a user from the server.',
  usage: '<member:member> [reason:str]',
  usageDelim: ' ',
  extendedHelp: '',
};
