const convertToCelsius = function(fahrenheitTemp) {
return Math.round( ((fahrenheitTemp-32) /1.8)*10)/10
};

const convertToFahrenheit = function(celTemp) {
  return Math.round((celTemp*1.8 +32)*10 )/10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
