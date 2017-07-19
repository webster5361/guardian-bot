const moment = require("moment");
const fs = require('fs');
const mkdirp = require('mkdirp');
//const config = require('../lib/config.json');

module.exports = (client, logDir, data) => {

  mkdirp(logDir);
  let fileName = `${logDir}${moment().format("YYYY-MM-DD")}.log`;
  let formattedData = `[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${data}\n`;

  fs.appendFile(fileName, formattedData, function (err) {
    if (err) {
      console.log(err);
    }
  });
};
