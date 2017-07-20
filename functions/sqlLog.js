const sqlite3 = require('sqlite3');
const sqlstring = require('sqlstring');
const dateFormat = require('dateformat');

// module.exports = () => {
module.exports = (guild_id, CaseNumber, v_id, v_tag, m_id, m_tag, Action, Reason) => {
  // const db = new sqlite3.Database('guardian');
  // db.serialize(function() {
  // let query = SqlString.format('INSERT INTO verify_queue_discord (id_discord_server, id_discord_user, id_webserver_user, timestamp) VALUES (' + SqlString.escape(member.guild.id) + ', ' + SqlString.escape(member.user.id) + ', ' + SqlString.escape(body) + ', ' + SqlString.escape(timestamp) + ')');

  const d = new Date();
  let timestamp = dateFormat(d, 'UTC:ddd mmm dS, yyyy h:MM:ss TT');
  timestamp = `${timestamp} UTC`;

  // const guildID = guild_id;
  // console.log(timestamp);
  // const caseNum = CaseNumber;
  // const v_memberID = v_id;
  // const v_member = v_tag;
  // const m_memberID = m_id;
  // const m_member = m_tag;
  // const action = Action;
  // const reason = Reason;

  // console.log(`GUILDID: ${guildID}`);
  // console.log(`TIMESTAMP: ${timestamp}`);
  // console.log(`CASE#: ${caseNum}`);
  // console.log(`V_MEMBER_ID: ${v_memberID}`);
  // console.log(`V_MEMBER: ${v_member}`);
  // console.log(`M_MEMBER_ID: ${m_memberID}`);
  // console.log(`M_MEMBER: ${m_member}`);
  // console.log(`ACTION: ${action}`);
  // console.log(`REASON: ${reason}`);
  //   let insert_query = sqlstring.format(INSERT INTO moderation (guildID, timestamp, caseNum, v_memberID, v_member, m_memberID, m_member, action, reason) VALUES (' + SqlString.escape(msg.guild.id) + ', ' + SqlString.escape(timestamp) + ', ' + sqlstring.escape(caseNumber) + ', ' + sqlstring.escape(member.id) + ', ' + sqlstring.escape()'));
  // });
};
