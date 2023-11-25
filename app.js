//functions
//return type is number
function findSum(num1, num2) {
    return num1 + num2;
}
var result = findSum(10, 30);
console.log("Result : " + result);
////////////////////////////////////////////////////////////////////
function isMax(num2) {
    var num1 = 20;
    return num1 < num2;
}
var num2 = 10;
var result2 = isMax(num2);
console.log(result2 ? "".concat(num2, " is Max") : "".concat(num2, " is Min"));
////////////////////////////////////////////////////////////////////
//arrow function
var findSumInString = function (num1, num2) {
    return "Sum is ".concat(num1 + num2);
};
console.log(findSumInString(10, 89));
///////////////////////////////////////////////////////////////////
function find(num1, num2) {
    if (typeof num1 === 'string' || typeof num2 === 'string') { // type guard
        return +num1 + +num2; // convert to numbers
    }
    else {
        num1 + num2;
    }
}
var number1 = find(30, 90);
console.log('find : ' + number1);
var number2 = find('45', 90);
console.log('find : ' + number2);
