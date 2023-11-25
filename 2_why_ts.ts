//why ts?

function sum(num1:number, num2:number){
    return num1+num2;
}

let value1=sum(10,20);
console.log("Sum is : "+value1)


//compile error
// let value2=sum('10',20);
// console.log("Sum is : "+value2)

let value3=sum(6,2);
console.log("Sum is : "+value3)

let n1 = '10'
let n2=30

let value4=sum(Number(n1),n2);
console.log("Sum is : "+value4)

let value5=sum(+n1,+n2);
console.log("Sum is : "+value5)


