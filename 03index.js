
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
console.log(User.Age);
console.log(User["Age"])

console.log(User[mySym])
