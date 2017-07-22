exports.run = (client, msg, [member, action]) => {
  const memberID = member.id;
  const memberTag = member.user.tag;
  const guildID = msg.guild.id;
  // action = action.charAt(0).toUpperCase();

  client.funcs.db_checkUser(guildID, memberID, action, function (data) {
    if (!data) {
      msg.channel.send('I\'m sorry but that person doesn\'t appear in my records! Check the user ID and try again.\nIf you feel this is a mistake, you will need to contact Odin#3464 and have him take a look.');
    } else {
      msg.channel.send(`I have that report you requested:\n\n\`\`\`ini\nREPORT FOR [ ${memberTag} (${memberID}) ]\n\n${action.toUpperCase()}S RECEIVED :: ${data.count}\`\`\``);
      // switch(action) {
      //   case 'warning':
      //     msg.channel.send(`I have that report you requested:\n\`\`\`ini\nREPORT FOR [ ${memberTag} (${memberID}) ]\n\nWARNINGS RECEIVED :: ${data.count}\`\`\``);
      //     break;
      //   case 'ban':
      //     msg.channel.send(`I have that report you requested:\n\`\`\`ini\nREPORT FOR [ ${memberTag} (${memberID}) ]\n\nBANS RECEIVED :: ${data.count}\`\`\``);
      //     break;
      //   case 'mute':
      //     msg.channel.send(`I have that report you requested:\n\`\`\`ini\nREPORT FOR [ ${memberTag} (${memberID}) ]\n\nMUTES RECEIVED :: ${data.count}\`\`\``);
      //     break;
      //   case 'unmute':
      //     msg.channel.send(`I have that report you requested:\n\`\`\`ini\nREPORT FOR [ ${memberTag} (${memberID}) ]\n\nUNMUTES RECEIVED :: ${data.count}\`\`\``);
      //     break;
      //   case 'kick':
      //     msg.channel.send(`I have that report you requested:\n\`\`\`ini\nREPORT FOR [ ${memberTag} (${memberID}) ]\n\nKICKS RECEIVED :: ${data.count}\`\`\``);
      //     break;
      //   default:
      //     break;
      // }
    }
  });
};

exports.conf = {
  enabled: true,
  selfbot: false,
  runIn: ['text'],
  aliases: [],
  permLevel: 3,
  botPerms: [],
  requiredFuncs: [],
  requiredModules: [],
};

exports.help = {
  name: 'check',
  description: 'Checks user for specified infraction.',
  usage: '<member:member> <action:str>',
  usageDelim: ' ',
  type: 'commands',
};
