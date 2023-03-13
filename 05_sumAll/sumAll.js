const sumAll = function(first,second) {
    if (typeof first !== "number" ||
        typeof second !== "number"||
        first<0||
        second<0
        ) {return "ERROR"}


    min=Math.min(first,second)
    n=Math.abs(first-second)+1

    sum=n*(n+1)/2 + n*(min-1)

    return sum
};

// Do not edit below this line
module.exports = sumAll;
