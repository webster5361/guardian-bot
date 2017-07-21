const moment = require('moment');
const fs = require('fs');
const mkdirp = require('mkdirp');

module.exports = (client, logDir, guildID, data) => {
  mkdirp(logDir);
  const fileName = `${logDir}${guildID}.${moment().format('YYYY-MM-DD')}.log`;
  const formattedData = `[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${data}\n`;

  fs.appendFile(fileName, formattedData, function (err) {
    if (err) {
      console.log(err);
    }
  });
};
