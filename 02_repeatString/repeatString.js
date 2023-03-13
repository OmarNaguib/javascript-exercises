const repeatString = function(singleString,repeats) {
    if (repeats<0) return "ERROR"
    let fullText="";
    for(let i=0;i<repeats;i++) {
        fullText+=singleString;
}
return fullText
};

// Do not edit below this line
module.exports = repeatString;
