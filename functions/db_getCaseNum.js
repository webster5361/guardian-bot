const sqlite3 = require('sqlite3');
const sqlstring = require('sqlstring');

// module.exports = () => {
module.exports = (guildID, callback) => {
  const db = new sqlite3.Database('guardian');
  const sqlQuery = sqlstring.format('SELECT * FROM moderation WHERE caseNum = (SELECT max(caseNum) FROM moderation WHERE guildID = ' + sqlstring.escape(guildID) + ')');
  db.all(sqlQuery, function(err, rows) {
    if (err) {
      console.log(err);
    } else {
      callback(rows[0].caseNum);
    }
  });
  db.close();
};
