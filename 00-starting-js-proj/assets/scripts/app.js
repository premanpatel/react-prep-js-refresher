// import { apiKey, abc as content } from "./util.js";
// //import apiKeyhello from "./util";
// import * as util from "./util";

// console.log(content);

// let userMessage = "hello world!!!";

// userMessage = "new val";

// console.log(userMessage);
// console.log(userMessage);

// function greet(username, message = "hello") {
//     console.log(username);
//     console.log(message);
//     return "hi i am " + username + "." + message
// }

// const greeting1 = greet("preman", "hellllooooo");
// console.log(greeting1);
// greet("max");


// const username = {
//     name: 'max',
//     age: 34,
//     greet() {
//         console.log("HWLLO");
//         console.log(this.age);
//     }
// };

// console.log(username.name);
// username.greet();

// class User {

//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     greet() {
//         console.log("HWLLO");
//     }
// }

// const user1 = new User("preman", 24);
// console.log(user1.greet());

// const hobbies = ["sports", "cooking", "reading"];
// console.log(hobbies);

// hobbies.push("working");

// console.log(hobbies);

// const index = hobbies.findIndex((item) =>  item === "sports");

// console.log(index);


// const newHobbies = hobbies.map((item) => ({text: item}));

// console.log(newHobbies);

// const [firstName, lastName] = ["preman", "patel"];
// const firstName = userNameData[0];
// const lastName = userNameData[1];

// console.log(firstName);
// console.log(lastName);

// const {name: firstName, age} = {
//     name: "prem",
//     age: 24
// }

// console.log(firstName);
// console.log(age);

// const hobbies = ["sports", "cooking", "reading"];
// const user = {
//     name: "prem",
//     age: 24
// };

// const newHobbies = ["reading"];
// const mergedHobbies = [...hobbies, ...newHobbies];
// console.log(mergedHobbies);

// const extendedUser = {
//     isAdmin: true,
//     ...user
// }

// console.log(extendedUser);

// if(10 === 10){

// }


// const hobbies = ["sports", "cooking", "reading"];

// for (const hobby of hobbies) {
//     console.log(hobby);
// }

// function handleTimeout(){
//     console.log("timeout!!");
// }

// const handleTimeout2 = () => {
//     console.log("Timeout again!!!");
// }

// setTimeout(handleTimeout, 2000);
// setTimeout(handleTimeout2, 3000);

// function greeter(greetFn){
//     greetFn();
// }

// greeter(() => console.log("HIII"));

// function init() {
//     function greet(){
//         console.log("greet");
//     }

//     greet();
// }

// init();

let userMessage = "hello";
userMessage = userMessage.concat('!!!!');

const hobbies = ["sprots", "cooking"];
hobbies.push("working");
console.log(hobbies);