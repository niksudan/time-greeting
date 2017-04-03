const moment = require('moment');

module.exports = () => {
  let time = 'morning';
  const currentHour = parseFloat(moment().format('HH'));
  if (currentHour >= 12 && currentHour <= 17) {
    time = 'afternoon';
  }
  if (currentHour >= 17) {
    time = 'evening';
  }
  return `Good ${time}`;
};
