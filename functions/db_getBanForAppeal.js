const sqlite3 = require('sqlite3');
const sqlstring = require('sqlstring');

// module.exports = () => {
module.exports = (guildID, memberID, callback) => {
  const db = new sqlite3.Database('guardian');
  const sqlQuery = sqlstring.format('SELECT * FROM moderation WHERE caseNum = (SELECT max(caseNum) FROM moderation WHERE guildID = ' + sqlstring.escape(guildID) + ' AND v_memberID = ' + sqlstring.escape(memberID) + ' AND action = \'Ban\')');
  db.all(sqlQuery, function (err, rows) {
    if (err) {
      console.log(err);
    } else {
      callback(rows[0]);
    }
  });
  db.close();
};
