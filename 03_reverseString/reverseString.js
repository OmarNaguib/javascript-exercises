const reverseString = function(string) {
    let splitText= string.split("");
    let reversedArray= splitText.reverse()
    let reversedText= reversedArray.join("")
    return reversedText
};

// Do not edit below this line
module.exports = reverseString;
