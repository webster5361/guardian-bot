const komada = require('komada');
const inspect = require('util').inspect;
const config = require('./lib/config.json');

komada.start({
  botToken: config.token,
  delete_mod_messages: '1',
  ownerID: config.ownerID,
  clientID: config.clientID,
  prefix: config.prefix,
  clientOptions: {
    fetchAllMembers: true,
  },
});

exports.run = (client, msg, [code]) => {
  try {
    let evaled = eval(code);
    if (typeof evaled !== 'string') {
      evaled = inspect(evaled, { depth: 0 });
    }
    msg.channel.sendCode('xl', client.funcs.clean(client, evaled));
  } catch (err) {
    msg.channel.sendMessage(`\`ERROR\` \`\`\`xl\n${
      client.funcs.clean(client, err)
      }\n\`\`\``);
    if (err.stack) client.funcs.log(err.stack, 'error');
  }
};

exports.conf = {
  enabled: true, // If we want this command to be enabled and loaded
  guildOnly: false, // If this command can only be used in a guild
  aliases: ['ev'], // Any custom aliases we want to point to this command
  permLevel: 10, // We set this to 10 because permLevel 10 = Bot Owner only
  botPerms: ['SEND_MESSAGE'], // Any permissions this command requires before being able to run
  requiredFuncs: ['clean'], // Any functions this command requires before being able to run
};

exports.help = {
  name: 'eval', // This will be the name of your command, not the file name.
  description: 'Evaluates arbitrary Javascript. Reserved for bot owner.', // A Description for the help command.
  usage: '<code:str>', // The arguments that will be passed to this command, In this case, a string.
  usageDelim: '', // The way for which you want to determine arguments.
  // For Example if you want to calculate arguments by using a | in between each new argument, you'll put a | in the usage delim.
  // If you want it to be a space in between each new argument, you'll put a space.
};
