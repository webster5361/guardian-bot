exports.init = (client) => {
};

exports.run = (client, msg, [duration]) => {
  reason = reason.join(" ");

  // if (!client.lockit) client.lockit = [];
  // let time = args.join(' ');
  // let validUnlocks = ['release', 'unlock'];
  // if (!time) return message.reply('You must set a duration for the lockdown in either hours, minutes or seconds');
  //
  // if (validUnlocks.includes(time)) {
  //   message.channel.overwritePermissions(message.guild.id, {
  //     SEND_MESSAGES: null
  //   }).then(() => {
  //     message.channel.send('Lockdown lifted.');
  //     clearTimeout(client.lockit[message.channel.id]);
  //     delete client.lockit[message.channel.id];
  //   }).catch(error => {
  //     console.log(error);
  //   });
  // } else {
  //   message.channel.overwritePermissions(message.guild.id, {
  //     SEND_MESSAGES: false
  //   }).then(() => {
  //     message.channel.send(`Channel locked down for ${ms(ms(time), { long:true })}`).then(() => {
  //
  //       client.lockit[message.channel.id] = setTimeout(() => {
  //         message.channel.overwritePermissions(message.guild.id, {
  //           SEND_MESSAGES: null
  //         }).then(message.channel.send('Lockdown lifted.')).catch(console.error);
  //         delete client.lockit[message.channel.id];
  //       }, ms(time));
  //
  //     }).catch(error => {
  //       console.log(error);
  //     });
  //   });
  // }

  // if(!reason) return msg.reply("You must supply a reason for the ban!");
  //
  // if(!msg.guild.member(member).bannable) return msg.reply('I cannot ban that member');
  //
  // msg.guild.ban(member, 7);
  // const embed=client.funcs.modlogs.createEmbed(client, msg.author, member.user, "ban", reason);
  // client.funcs.modlogs.post(client, msg.guild, embed).catch(console.error);
  // msg.channel.send("Ban successful!");
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
  name: "lockdown",
  description: "Locks down a channel for a given time period.",
  usage: "[duration:str]",
  usageDelim: " ",
  extendedHelp: "",
};
