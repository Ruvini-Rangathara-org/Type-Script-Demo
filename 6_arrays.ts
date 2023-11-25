//arrays

let num_array:number[]=[1,2,3,4,5,6];
let str_array:string[]=["a","b","c","d"];
let bool_array:boolean[]=[true,false,true,false];
let any_array:any[]=[1,"a",true,2,"b",false];
let str_num_array:[string,number]=["a",1];

console.log(num_array);
console.log(str_array);
console.log(bool_array);
console.log(any_array);
console.log(str_num_array);

let student1={id:1,name:"a",age:23,faculty:"IT"};
let student2={id:2,name:"b",age:24,faculty:"IT"};
let student3={id:3,name:"c",age:25,faculty:"IT",uni:"UCSC"};
let student4=10;

// uni is optional
let students:{id:number,name:string,age:number,faculty:string, uni?:string}[]=[];
students.push(student1);
students.push(student2);
students.push(student3);
// student4.push(student4);         //error

console.log(students);

