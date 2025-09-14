// const { use } = require("react");
// Promise One
// const promiseOne = new Promise(function(resolve, reject){
//     // Do an async task
//     // DB calls, cryptography, network
// setTimeout(function(){
//     console.log('asyn is completed');
//     resolve()
// }, 1000)
// })
// promiseOne.then(function () {
//     console.log("Promise Consumed");
    
// })



// Promise Two
// new Promise(function (resolve,reject) {
//     setTimeout(function() {
//         console.log("asyns task 2");
//         resolve()
//     }, 1000);
// }).then(function(){
//     console.log("async 2 resolved");
    
// })



//Promise Three
// const promiseThree = new Promise(function(resolve, reject){
    
// setTimeout(function(){
    
//     resolve({username: "aman", email: "siddiqui@gmail.com"})
// }, 1000)
// })
// promiseThree.then(function (user) {
//     console.log(user);
    
// })



// Promise Four
// const promiseFour = new Promise(function(resolve, reject){
   
// setTimeout(function(){
//     let error = false
//     if (!error){
//  resolve({username: "AMAN", password: "SIDDIQUI@gmail.com"})
//     }else{
//         reject('ERROR: Something went wrong')
//     }
   
// }, 1000)
// })
// promiseFour.then((user) => {
// console.log(user);
// return user.username
// })
// .then((username) => {
//     console.log(username);
// }).catch(function (error) {
//     console.log(error);
    
// }).finally(() => {
//     console.log("The promise is either resolved or rejected");
// })









// Promise Five
// const promiseFive = new Promise(function(resolve, reject){
   
// setTimeout(function(){
//     let error = true
//     if (!error){
//  resolve({username: "JS", password: "JS@gmail.com"})
//     }else{
//         reject('ERROR: JS went wrong')
//     }
   
// }, 1000)
// })

// async function PromiseFive(){
//    try {
//      const response = await promiseFive
//     console.log(response);
//    } catch (error){
//     console.log(error);
//     }
// }
// PromiseFive()


// 6:30