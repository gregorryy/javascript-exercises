const convertToCelsius = function (temp) {
  let celcius = ((temp - 32) * 5) / 9;
  let deg = Math.round(celcius * 10) / 10;
  return deg;
};

const convertToFahrenheit = function (temp) {
  let far = (temp * 9) / 5 + 32;
  let deg = Math.round(far * 10) / 10;
  return deg;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
