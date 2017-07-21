const sqlite3 = require('sqlite3');
const sqlstring = require('sqlstring');
const dateFormat = require('dateformat');

module.exports = (client, guild_id, CaseNumber, v_id, v_tag, m_id, m_tag, Action, Reason) => {
  const timestamp = client.funcs.getLogDate();
  const db = new sqlite3.Database('guardian');
  const queryString = sqlstring.format('INSERT INTO moderation (guildID, timestamp, caseNum, v_memberID, v_member, m_memberID, m_member, action, reason) VALUES (' + sqlstring.escape(guild_id) + ', ' + sqlstring.escape(timestamp) + ', ' + sqlstring.escape(CaseNumber) + ', ' + sqlstring.escape(v_id) + ', ' + sqlstring.escape(v_tag) + ', ' + sqlstring.escape(m_id) + ', ' + sqlstring.escape(m_tag) + ', ' + sqlstring.escape(Action) + ', ' + sqlstring.escape(Reason) + ')');
  db.run(queryString);
  db.close();
};
