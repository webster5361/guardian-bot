const embedTypes = {
  Ban: 0x8e0000,
  Unban: 0x00a0bc,
  Kick: 0xbc4b00,
  Warning: 0xdbdb00,
  Mute: 0xdb0050,
  Unmute: 0x00a0bc,
};

exports.run = (client, msg, [caseNum]) => {

  client.funcs.db_getCase(msg.guild.id, caseNum, function (data) {
    const embed = new client.methods.Embed();
    const color = embedTypes.hasOwnProperty(data[0].action) ? embedTypes[data[0].action] : 0x222222;

    const timeArray = data[0].timestamp.split(' ');
    timeArray.splice(-1, 1);
    const numericDate = client.funcs.getNumericMonth(timeArray[1]);
    const dayString = timeArray[2].substring(-2, 2);
    const timestamp = new Date(`${numericDate}/${dayString}/${timeArray[3]} ${timeArray[4]}`);
    embed
      .setColor(color)
      .setTitle(`Case #${data[0].caseNum}`)
      .setAuthor(`${data[0].m_member} (${data[0].m_memberID})`)
      .setTimestamp(timestamp)
      .addField('Action:', client.funcs.toTitleCase(data[0].action), true)
      .addField('Target:', `${data[0].v_member}`, true)
      .setFooter(data[0].v_memberID)
      .setThumbnail(client.user.avatarURL);
    if (!!data[0].reason && data[0].reason.length > 0) {
      embed.addField('Reason:', data[0].reason, true);
    }
    msg.channel.send({ embed });
  });
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
  name: 'case',
  description: 'Gathers case information about an incident',
  usage: '<caseNum:int>',
  usageDelim: ' ',
  extendedHelp: '',
};
