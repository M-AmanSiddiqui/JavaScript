//Objecct Singleton
const tinderUser = {}

tinderUser.id = "abc123"
tinderUser.name = "Aman"

// console.log(tinderUser);
// console.log(tinderUser.hasOwnProperty('name')); //true
// console.log(Object.keys(tinderUser)); //Array mei keys return krta hai
// console.log(Object.values(tinderUser)); //Array mei value return krta hai

const regularUser = {
    email:"aman@gmailcom",
    fullName: {
        user: "Aman",
        usertwo: {
            userthree: "siddiqui"
        }
    }
}
//  console.log(regularUser.fullName.usertwo);


const object1 = {1: "a", 2: "b"}


const object2 = {3: "c", 4: "d"}
// const obj3 = {object1,object2}
// const obj3 = Object.assign({},object1,object2)
const obj3 = {...object1,...object2}
//console.log(obj3 );



const course = {
    courseName: "JS",
    price: "100",
    Teacher: "Aman"

}

const {Teacher} = course
// console.log(Teacher);







//Objecct literals
const mySym = Symbol("key1")
const User = {
    name: "Aman",
    [mySym]: "key1",
    Age:  18,
    location: "Karachi",
    isLoggedIn: false,
    LastLoginDays: ["Mon", "Tue"]
}
// console.log(User.Age);
// console.log(User["Age"])

// console.log(User[mySym])
User.greeting = function () {
    console.log("Hello JS User");
    
}
User.greetingtwo = function () {
    console.log(`Hello JS User, ${this.name}`);
    
}
// console.log(User.greeting());
// console.log(User.greetingtwo());

