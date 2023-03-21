const palindromes = function (text) {
text = text.toLowerCase().replace(/\W/g,"");
return text === text.split("").reverse().join("")
};

// Do not edit below this line
module.exports = palindromes;
