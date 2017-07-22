exports.run = (client, member) => {
  // If greeting is enabled, greet the new member
  if (client.guildConfs.get(member.guild.id).greeting_enabled.data) {
    const channel_rules = member.guild.channels.find('name', 'rules');
    member.guild.defaultChannel.send(`${member}, Welcome to our server! If you have any questions, please let us know!\nAlso, please review our ${channel_rules}, Thanks.`);
  }

  // Log the new member in the member-log
  const embed = new client.methods.Embed();
  const color = 0x99FF00;

  embed
    .setColor(color)
    .setAuthor(`${member.user.tag} (${member.id})`, member.user.displayAvatarURL)
    .setTimestamp()
    .setFooter('User joined')

  const channel_memberLog = member.guild.channels.find('name', client.guildConfs.get(member.guild.id).channel_memberLog.data);
  channel_memberLog.send({ embed });
};
