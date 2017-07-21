const months = [];
months.push({ key: 1, value: 'Jan' });
months.push({ key: 2, value: 'Feb' });
months.push({ key: 3, value: 'Mar' });
months.push({ key: 4, value: 'Apr' });
months.push({ key: 5, value: 'May' });
months.push({ key: 6, value: 'Jun' });
months.push({ key: 7, value: 'Jul' });
months.push({ key: 8, value: 'Aug' });
months.push({ key: 9, value: 'Sep' });
months.push({ key: 10, value: 'Oct' });
months.push({ key: 11, value: 'Nov' });
months.push({ key: 12, value: 'Dec' });

module.exports = (monthString) => {
  let numericDate = '';
  months.forEach(function(month) {
    if (monthString === month.value) {
      numericDate = month.key;
    }
  });
  return numericDate;
};
