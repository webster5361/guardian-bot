exports.init = (client) => {
};

exports.run = (client, msg, [member, ...reason]) => {
  reason = reason.join(" ");

  if(!reason) return msg.reply("You must supply a reason for the ban!");

  if(!msg.guild.member(member).bannable) return msg.reply('I cannot ban that member');

  msg.guild.ban(member, 7);
  const embed=client.funcs.modlogs.createEmbed(client, msg.author, member.user, "ban", reason);
  client.funcs.modlogs.post(client, msg.guild, embed).catch(console.error);
  msg.channel.send("Ban successful!");
};

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: [],
  permLevel: 10,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "ban",
  description: "Bans a user from the server.",
  usage: "<member:member> [reason:str]",
  usageDelim: " ",
  extendedHelp: "",
};
