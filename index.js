const moment = require('moment');

module.exports = (date = undefined) => {
  let time = 'morning';
  const currentHour = parseFloat(moment(date).format('HH'));
  if (currentHour >= 12 && currentHour < 18) {
    time = 'afternoon';
  } else if (currentHour >= 18) {
    time = 'evening';
  }
  return `Good ${time}`;
};
