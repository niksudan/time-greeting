const moment = require('moment');

module.exports = () => {
  let time = 'morning';
  const currentHour = parseFloat(moment().format('HH'));
  if (currentHour >= 12 && currentHour < 18) {
    time = 'afternoon';
  } else if (currentHour >= 18) {
    time = 'evening';
  }
  return `Good ${time}`;
};
