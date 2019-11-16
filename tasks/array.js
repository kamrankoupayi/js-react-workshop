// Create an unordered array of numbers
var myArr = [10, 540, 234, -2345];

// Function for returning smallest number
function minArr( inputArr ){
    var minNumber = Infinity;
    minArr.forEach(element => {
        if(element < minNumber)
            minNumber = element;
    });
    return minNumber;
}

// Function for returning largest number
function maxArr( inputArr ){
    var maxNumber = -Infinity;
    minArr.forEach(element => {
        if(element > maxNumber)
            maxNumber = element;
    });
    return maxNumber;
}

// making the squared of contents
var squaredArr = myArr.map(element => element*element);