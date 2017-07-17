exports.init = (client) => {
};

exports.run = (client, msg, [member, ...reason]) => {
  reason = reason.join(" ");
  if(!reason) return msg.reply("You must supply a reason for the warning!");
  member.send(`You have been given a warning by \`${msg.author.username}\` in the \`${msg.guild.name}\` Discord server for the following reason:\n\`\`\`${reason}\`\`\`\nRepeated violations will result in your removal from this server.`);
  const embed=client.funcs.modlogs.createEmbed(client, msg.author, member.user, "warn", reason);
  client.funcs.modlogs.post(client, msg.guild, embed).catch(console.error);
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
  name: "warn",
  description: "Warns a user on the server.",
  usage: "<member:member> [reason:str]",
  usageDelim: " ",
  extendedHelp: "",
};
