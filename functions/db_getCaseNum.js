const sqlite3 = require('sqlite3');
const sqlstring = require('sqlstring');

// module.exports = () => {
module.exports = (guildID, callback) => {

  // const queryString = sqlstring.format('INSERT INTO moderation (guildID, timestamp, caseNum, v_memberID, v_member, m_memberID, m_member, action, reason) VALUES (' + sqlstring.escape(guild_id) + ', ' + sqlstring.escape(timestamp) + ', ' + sqlstring.escape(CaseNumber) + ', ' + sqlstring.escape(v_id) + ', ' + sqlstring.escape(v_tag) + ', ' + sqlstring.escape(m_id) + ', ' + sqlstring.escape(m_tag) + ', ' + sqlstring.escape(Action) + ', ' + sqlstring.escape(Reason) + ')');
  var data = [];
  const db = new sqlite3.Database('guardian');
  const sqlQuery = sqlstring.format('SELECT * FROM moderation WHERE caseNum = (SELECT max(caseNum) FROM moderation WHERE guildID = ' + sqlstring.escape(guildID) + ')');
  // console.log(sqlQuery);
  db.all(sqlQuery, function(err, rows) {
    if (err) {
      console.log(err);
    } else {
      callback(rows[0].caseNum);
    }
  });
  db.close();
};
