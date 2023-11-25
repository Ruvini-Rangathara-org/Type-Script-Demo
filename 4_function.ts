//functions


//return type is number
function findSum(num1:number, num2:number):number{
    return num1+num2;
}

let result = findSum(10,30);
console.log("Result : "+result);


////////////////////////////////////////////////////////////////////
function isMax(num2:number):boolean{
    let num1 = 20;
    return num1<num2;
}

let num2:number = 10;
let result2 = isMax(num2);
console.log(result2 ? `${num2} is Max` : `${num2} is Min`);


////////////////////////////////////////////////////////////////////

//arrow function
const findSumInString = (num1:number, num2:number):string =>{
    return `Sum is ${num1+num2}`;
}

console.log(findSumInString(10,89));


///////////////////////////////////////////////////////////////////

function find(num1:number|string, num2:number|string){
    if(typeof num1 === 'string' || typeof num2 === 'string'){  // type guard
        return +num1+ +num2;  // convert to numbers
    }else{
        return num1 + num2;
    }
}

let number1 = find(30,90);
console.log('find : '+number1);


let number2 = find('45',90);
console.log('find : '+number2);



//////////////////////////////////////////////////////////////////
function find2(num1:number|string, num2:number|string):number|string{
    if(typeof num1 === 'string' || typeof num2 === 'string'){  // type guard
        return +num1+ +num2;  // convert to numbers
    }else{
        return num2 + num1;
    }
}

let number3 = find(30,60);
console.log("number : "+number3)