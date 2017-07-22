exports.run = (client, msg, [member, action]) => {
  action = action.toLowerCase();
  const adminRoleName = client.guildConfs.get(msg.guild.id).adminRole.data;
  const adminRole = msg.guild.roles.find('name', adminRoleName);
  if (!adminRole) return msg.channel.send(`I'm sorry, but there doesn't appear to be a role called \`${adminRoleName}\``);
  if (action === 'true') {
    // Make user an admin
    member.addRole(adminRole);
    msg.channel.send(`${member.user.username} was successfully promoted to ${adminRoleName}!`)
    member.send(`Hello ${member.user.username}! I am proud to announce that you have been successfully promoted to the rank of: \`${adminRoleName}\`!\nWith this added role, you now have additional responsibilities as well. The goals of our admins are to maintain order and a clean, friendly Discord server.\n`);
  } else {
    // Remove user as an admin
    member.removeRole(adminRole);
    msg.channel.send(`${member.user.username} was successfully demoted from ${adminRoleName}`);
    member.send(`Hello ${member.user.username}, I am sorry to announce that you have been demoted from the rank of: \`${adminRoleName}\`.\nThank you for the time that you have spent helping us to grow and prosper, but at this time we no longer need your assistance.\nDepending on the details of your departure, this could definitely change in the future as we are much more likely to bring an experienced admin back than bring on a new one.\nThanks again!`);
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
  name: 'admin',
  description: 'Adds/Removes user from Administrator Role',
  usage: '<member:member> [enable:str]',
  usageDelim: ' ',
  extendedHelp: 'Role set in your config.json file.',
};
