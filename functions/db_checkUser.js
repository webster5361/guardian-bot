const sqlite3 = require('sqlite3');
const sqlstring = require('sqlstring');

// module.exports = () => {
module.exports = (guildID, memberID, action, callback) => {
  const db = new sqlite3.Database('guardian');
  const sqlQuery = sqlstring.format('SELECT guildID, count(guildID) AS count FROM moderation WHERE v_memberID = ' + sqlstring.escape(memberID) + ' AND action = ' + sqlstring.escape(action) + ' AND guildID = ' + sqlstring.escape(guildID));
  db.all(sqlQuery, function(err, rows) {
    if (err) {
      console.log(err);
    } else {
      callback(rows[0]);
    }
  });
  db.close();
};
