exports.run = (client, guild) => {
  const logMessage = `GUARDIAN has joined a new guild: ${guild.name} [ ${guild.id} ]`;
  client.funcs.log(`${logMessage}`, 'logMessage');

  client.funcs.write_log(`${logMessage}`);

  const guildConfigs = client.guildConfs.get(guild.id);
  guildConfigs.addKey('deleteCommand', 'true', 'Boolean');
  guildConfigs.addKey('modLog', 'modlogs', 'String');
  guildConfigs.addKey('modLog-embed', 'true', 'Boolean');
  guildConfigs.addKey('logDir', 'log/', 'String');
  guildConfigs.addKey('channel_newMember', 'new-member-stream', 'String');
  guildConfigs.addKey('channel_memberLeft', 'member-left-stream', 'String');
  guildConfigs.addKey('channel_messageDeleted', 'message-deleted-stream', 'String');
  guildConfigs.addKey('role_mute', 'Muted', 'String');
  guildConfigs.addKey('role_trusted', 'Verified', 'String');
};
