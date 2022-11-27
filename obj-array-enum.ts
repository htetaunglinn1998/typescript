// const people: {name: string; age: number;} = {
// const person:{
//     name:string;
//     age:number;
//     hobbies:string[];
//     role:[number,string]
// } ={
//     name : "Htet Aung Linn",
//     age:24,
//     hobbies: ['Sports','Cooking'],
//     role: [2,'author']
// }

enum Role{'ADMIN', 'READ_ONLY', 'AUTHOR'};

const person ={
    name : "Htet Aung Linn",
    age:24,
    hobbies: ['Sports','Cooking'],
    role: Role.ADMIN
}

if(person.role === Role.ADMIN){
    console.log("Admin account")
}

// person.role.push('admin');
// person.role[1] = 10; //number cannot be assigned for room[1]

// person.role = [0,'admin', 'user'] // Exceeds limit number

// let favouriteActivities: string[];
// favouriteActivities = ['Sports']

// console.log(person.name)

// for (const hobby of person.hobbies){
//     console.log(hobby.toUpperCase())
//     // console.log(hobby.map()) //!!!Error
// }
