const sumAll = function(first,second) {
    if (typeof first !== "number" ||
        typeof second !== "number"||
        first<0||
        second<0
        ) {return "ERROR"}

    // The sum is divided into a sum from 1 to n+1 AND (n+1) * min
    min=Math.min(first,second)
    n=Math.abs(first-second)+1

    sum=n*(n+1)/2 + n*(min-1)

    return sum
};

// Do not edit below this line
module.exports = sumAll;
