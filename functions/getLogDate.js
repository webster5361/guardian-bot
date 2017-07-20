const dateFormat = require('dateformat');

// module.exports = () => {
module.exports = () => {
  const d = new Date();
  let timestamp = dateFormat(d, 'UTC:ddd mmm dS, yyyy h:MM:ss TT');
  timestamp = `${timestamp} UTC`;
  return timestamp;
};
