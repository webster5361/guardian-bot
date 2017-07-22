exports.run = (client, guild) => {
  const logMessage = `GUARDIAN has joined a new guild: ${guild.name} [ ${guild.id} ]`;
  client.funcs.log(`${logMessage}`, 'logMessage');

  client.funcs.write_log(`${logMessage}`);

  const guildConfigs = client.guildConfs.get(guild.id);
  guildConfigs.addKey('deleteCommand', 'true', 'Boolean');
  guildConfigs.addKey('modLog', 'modlogs', 'String');
  guildConfigs.addKey('modLog-embed', 'true', 'Boolean');
  guildConfigs.addKey('logDir', 'log/', 'String');
  guildConfigs.addKey('channel_memberLog', 'member-log', 'String');
  guildConfigs.addKey('channel_messageDeleted', 'message-deleted-stream', 'String');
  guildConfigs.addKey('role_mute', 'Muted', 'String');
  guildConfigs.addKey('role_trusted', 'Verified', 'String');
  guildConfigs.addKey('greeting_enabled', 'false', 'String');
  guildConfigs.addKey('exit_message', 'true', 'String');
};
