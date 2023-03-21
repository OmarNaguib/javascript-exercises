const add = function(first,second) {
  return first+second
	
};

const subtract = function(first,second) {
  return first-second
	
};

const sum = function(nums) {
  let sum=0
  nums.forEach(num=>{sum+=num})
  return sum
	
};

const multiply = function(nums) {
  let result=1
  nums.forEach(num=>{result*=num})
  return result;
};

const power = function(base,exponent) {
	return base ** exponent
};

const factorial = function(number) {
  let result=1;
  for (let i=1;i<=number;i++) {result*=i}
	return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
