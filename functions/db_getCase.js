const sqlite3 = require('sqlite3');
const sqlstring = require('sqlstring');

// module.exports = () => {
module.exports = (guildID, caseID, callback) => {
  const db = new sqlite3.Database('guardian');
  const sqlQuery = sqlstring.format('SELECT * FROM moderation WHERE guildID = ' + sqlstring.escape(guildID) + ' AND caseNum = ' + sqlstring.escape(caseID));
  // console.log(sqlQuery);
  db.all(sqlQuery, function (err, row) {
    if (err) {
      console.log(err);
    } else {
      callback(row);
    }
  });
  db.close();
};
