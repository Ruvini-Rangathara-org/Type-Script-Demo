//type creation

let student1 = {id: 1, name: "John",age: 25, faculty: "Computer Science"};
let student2 = {id: 2, name: "Mary",age: 23, faculty: "Computer Science"};
let student3 = {id: 3, name: "Peter",age: 25, faculty: "Computer Science", uni: "University of Toronto"};

//custom type creation with type keyword
type graduate = {id: number, name: string, age: number, faculty: string, uni?: string};

let students:graduate[] = [];
let teachers:graduate[] = [];

students.push(student1);
students.push(student2);
students.push(student3);

console.log(students);

let teacher1 = {id: 1, name: "John",age: 25, faculty: "Computer Science"};
let teacher2 = {id: 2, name: "Mary",age: 23, faculty: "Computer Science"};
let teacher3 = {id: 3, name: "Peter",age: 25, faculty: "Computer Science", uni: "University of Toronto"};

teachers.push(teacher1);
teachers.push(teacher2);
teachers.push(teacher3);

console.log(teachers);

//custom type creation with interface keyword
interface Person {
    id: number;
    name: string;
    age: number;
    faculty: string;
    uni?: string;
}
let p1:Person= {id: 1, name: "John",age: 25, faculty: "Computer Science"};

//custom type creation with class keyword
class Student {
    id: number;
    name: string;
    age: number;
    faculty: string;
    uni?: string;
}

let student4 = new Student();
student4.id = 4;
student4.name = "John";
student4.age = 25;
student4.faculty = "Computer Science";

console.log(student4);

//custom object creation with literal base, this is only data
let student5 = {
    id: 5,
    name: "John",
    age: 25,
    faculty: "Computer Science"
}

console.log(student5);

