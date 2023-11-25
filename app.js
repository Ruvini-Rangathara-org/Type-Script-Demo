//primitives - number, string, boolean
function sendSum(num1, num2, name, isWithName) {
    var result = isWithName ? "Hi ".concat(name, ", Sum is : ").concat(num1 + num2) : "Sum is : ".concat(num1 + num2);
    return result;
}
var result1 = sendSum(10, 40, 'Ruvini', false);
console.log(result1);
var result2 = sendSum(1, 4, 'Rangathara', true);
console.log(result2);
function getSum() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
}
var result3 = getSum(1, 2, 3, 4, 5);
console.log(result3);
