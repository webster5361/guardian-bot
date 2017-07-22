exports.run = (client, member) => {
  // If exit message is enabled, say goodbye to the member
  if (member.id === '336504595050397696') return;
  if (client.guildConfs.get(member.guild.id).exit_message.data) {
    member.guild.defaultChannel.send(`${member.user.tag} has left the server...`);
  }

  // Log the new member in the member-log
  const embed = new client.methods.Embed();
  const color = 0xCC0000;

  embed
    .setColor(color)
    .setAuthor(`${member.user.tag} (${member.id})`, member.user.displayAvatarURL)
    .setTimestamp()
    .setFooter('User left');

  const channelMemberLog = member.guild.channels.find('name', client.guildConfs.get(member.guild.id).channel_memberLog.data);
  channelMemberLog.send({ embed });
};
