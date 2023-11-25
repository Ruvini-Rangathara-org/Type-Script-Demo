//primitives - number, string, boolean

function sendSum(num1:number, num2:number, name:string, isWithName:boolean){
    let result = isWithName ? `Hi ${name}, Sum is : ${num1+num2}` : `Sum is : ${num1+num2}`;
    return result;
}

let result1 = sendSum(10,40,'Ruvini', false);
console.log(result1);

let result2 = sendSum(1,4,'Rangathara', true);
console.log(result2);

function getSum(...args:number[]){
    let sum = 0;
    for(let i=0; i<args.length; i++){
        sum += args[i];
    }

    return sum;
}

let result3 = getSum(1,2,3,4,5);
console.log(result3);


let num1:number = 10;
let num2:number = 20;
let name1:string = 'Ruvini';
let isWithName:boolean = true;

let result4 = sendSum(num1,num2,name1,isWithName);
console.log(result4);