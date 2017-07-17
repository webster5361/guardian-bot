exports.init = (client) => {
};

exports.run = (client, msg, [member, ...reason]) => {
  reason = reason.join(" ");

  let muteRole = msg.guild.roles.find(r=>r.name.toLowerCase() === "muted");
  if (!muteRole) return msg.reply("I cannot find a `Muted` role!");

  const muted = member.roles.has(muteRole.id);

  if(!muted && !reason) return msg.reply("You must supply a reason for the mute!");

  if (!msg.guild.member(client.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return msg.reply("I do not have the correct permissions.").catch(console.error);

  if (!muted) {
    member.addRole(muteRole).then(() => {
      const embed = client.funcs.modlogs.createEmbed(client, msg.author, member.user, "mute", reason);
      client.funcs.modlogs.post(client, msg.guild, embed).catch(console.error);
      msg.channel.send("Mute successful!");
    })
  } else {
    member.removeRole(muteRole).then(() => {
      const embed = client.funcs.modlogs.createEmbed(client, msg.author, member.user, "unmute", reason);
      client.funcs.modlogs.post(client, msg.guild, embed).catch(console.error);
      msg.channel.send("Unmute successful!");
    })
  }
};

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: [],
  permLevel: 2,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "mute",
  description: "Mutes or unmutes a user in the server.",
  usage: "<member:member> [reason:str]",
  usageDelim: " ",
  extendedHelp: "",
};
