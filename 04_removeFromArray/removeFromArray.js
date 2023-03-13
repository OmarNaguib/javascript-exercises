const removeFromArray = function(myArray,...theArgs) {
    for (const item of theArgs) {
        index=myArray.indexOf(item)
        if (index === -1) continue
        myArray.splice(myArray.indexOf(item),1)
    }
    return myArray
};

// Do not edit below this line
module.exports = removeFromArray;
