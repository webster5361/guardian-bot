exports.run = (client, msg, [member, action]) => {
  action = action.toLowerCase();
  const modRoleName = client.guildConfs.get(msg.guild.id).modRole.data;
  const modRole = msg.guild.roles.find('name', modRoleName);
  if (!modRole) return msg.channel.send(`I'm sorry, but there doesn't appear to be a role called \`${modRoleName}\``);
  if (action === 'true') {
    // Make user an moderator
    member.addRole(modRole);
    msg.channel.send(`${member.user.username} was successfully promoted to ${modRoleName}!`);
    member.send(`Hello ${member.user.username}! I am proud to announce that you have been successfully promoted to the rank of: \`${modRoleName}\`!\nWith this added role, you now have additional responsibilities as well. The goals of our moderators is to maintain order and a clean, friendly Discord server.\n`);
    const logger = `${msg.author.tag} [ ${msg.author.id} ] has promoted ${member.user.tag} [ ${member.id} ] to the rank of '${modRoleName}' in the '${msg.guild.name}' [ ${msg.guild.id} ] Discord server.`;
    const logDir = client.guildConfs.get(msg.guild.id).logDir.data;
    client.funcs.write_log(client, logDir, msg.guild.id, logger);
    client.funcs.log(logger, 'warn');
  } else {
    // Remove user as an moderator
    member.removeRole(modRole);
    msg.channel.send(`${member.user.username} was successfully demoted from ${modRoleName}`);
    member.send(`Hello ${member.user.username}, I am sorry to announce that you have been demoted from the rank of: \`${modRoleName}\`.\nThank you for the time that you have spent helping us to grow and prosper, but at this time we no longer need your assistance.\nDepending on the details of your departure, this could definitely change in the future as we are much more likely to bring an experienced moderator back than bring on a new one.\nThanks again!`);
    const logger = `${msg.author.tag} [ ${msg.author.id} ] has demoted ${member.user.tag} [ ${member.id} ] from the rank of '${modRoleName}' in the '${msg.guild.name}' [ ${msg.guild.id} ] Discord server.`;
    const logDir = client.guildConfs.get(msg.guild.id).logDir.data;
    client.funcs.write_log(client, logDir, msg.guild.id, logger);
    client.funcs.log(logger, 'warn');
  }
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
  name: 'mod',
  description: 'Adds/Removes user from Moderator Role',
  usage: '<member:member> [enable:str]',
  usageDelim: ' ',
  extendedHelp: 'Role set in your config.json file.',
};
