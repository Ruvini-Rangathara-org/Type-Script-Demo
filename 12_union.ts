//union
//what is union in ts?
//union is a way to declare a variable with multiple types

let array: (number | string | boolean)[] = [1, 2, "Hello", true];

class Student {
    id: number;
    name: string;
    college: string;
    faculty: string;
}

class Teacher {
    id: number;
    name: string;
    subject: string;
    college: string;
}

class Soldier {
    id: number;
    name: string;
    post: string;
}

let people: (Student | Teacher | Soldier)[] = [];
