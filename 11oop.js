//oops
function User(userName, isLoggedIn) {
    this.userName = userName
    this.isLoggedIn = isLoggedIn
    return this
}
const userOne = new User("Aman",true)
console.log(userOne);
