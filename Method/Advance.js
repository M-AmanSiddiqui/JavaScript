//************************************RegExp Methods (4)************************************** *//

// 1. exec()
let regex1 = /a/g;
let str_regex1 = "abc abc";
let regex_exec = regex1.exec(str_regex1);
console.log("1. regex1.exec('abc abc'):", regex_exec);
//  exec() method string me pattern match dhundta hai aur first match ka array return karta hai.
// Ye array me match, index aur input property hoti hai. Agar match na mile to null return karta hai.
// Output: ["a", index: 0, input: "abc abc", groups: undefined]

// 2. test()
let regex_test = /b/.test("abc");
console.log("2. /b/.test('abc'):", regex_test);
//  test() method check karta hai ki pattern string me exist karta hai ya nahi. Agar match ho jaye to true, nahi to false return karta hai.
// Output: true

// 3. toString()
let regex_str = /abc/i.toString();
console.log("3. /abc/i.toString():", regex_str);
//  Regular expression ko string me convert karta hai. Flags (i,g,m) bhi string me include hoti hai.
// Output: "/abc/i"

// 4. compile() (mostly deprecated)
let regex_compile = /x/;
regex_compile.compile("y");
console.log("4. regex_compile.compile('y'):", regex_compile);
//  compile() method pattern ko dobara compile karta hai. Ye mostly use nahi hota aur modern JS me discouraged hai.
// Output: /y/


//************************************Map Methods/Properties (9)************************************** *//

let map1 = new Map();

// 1. set()
map1.set("a", 100);
console.log("1. map1.set('a',100):", map1);
//  set() method ek key-value pair Map me store karta hai. Agar key pehle exist karti hai to update kar deta hai.
// Output: Map(1) { 'a' => 100 }

// 2. get()
let map_get = map1.get("a");
console.log("2. map1.get('a'):", map_get);
//  get() method key ke corresponding value return karta hai. Agar key exist nahi karti to undefined return karta hai.
// Output: 100

// 3. has()
let map_has = map1.has("a");
console.log("3. map1.has('a'):", map_has);
//  has() method check karta hai ki given key Map me exist karti hai ya nahi. Boolean return karta hai.
// Output: true

// 4. delete()
map1.delete("a");
console.log("4. map1.delete('a'):", map1);
//  delete() method given key-value pair ko Map se remove karta hai.
// Output: Map(0) {}

// 5. clear()
map1.set("b",200); map1.clear();
console.log("5. map1.clear():", map1);
//  clear() method Map ke sab key-value pairs remove karta hai.
// Output: Map(0) {}

// 6. forEach()
map1.set("x",1); map1.set("y",2);
console.log("6. map1.forEach():");
map1.forEach((v,k)=>console.log(k,v));
//  forEach() method har key-value pair pe function run karta hai, output me custom action perform kar sakte ho.
// Output: x 1
//         y 2

// 7. keys()
console.log("7. map1.keys():", [...map1.keys()]);
//  keys() method Map ki sari keys ka iterator return karta hai, spread operator se array me convert kiya.
// Output: ["x","y"]

// 8. values()
console.log("8. map1.values():", [...map1.values()]);
//  values() method Map ki sari values ka iterator return karta hai.
// Output: [1,2]

// 9. entries()
console.log("9. map1.entries():", [...map1.entries()]);
//  entries() method Map ka [key,value] pair ka iterator return karta hai.
// Output: [["x",1],["y",2]]


//************************************Set Methods/Properties (7)************************************** *//

let set1 = new Set();

// 1. add()
set1.add(10);
console.log("1. set1.add(10):", set1);
//  add() method Set me value add karta hai. Duplicate values ignore hoti hain.
// Output: Set(1) {10}

// 2. has()
console.log("2. set1.has(10):", set1.has(10));
//  has() method check karta hai ki value Set me exist karti hai ya nahi.
// Output: true

// 3. delete()
set1.delete(10);
console.log("3. set1.delete(10):", set1);
//  delete() method value Set se remove karta hai.
// Output: Set(0) {}

// 4. clear()
set1.add(5); set1.add(6); set1.clear();
console.log("4. set1.clear():", set1);
//  clear() method Set ke sab elements remove karta hai.
// Output: Set(0) {}

// 5. forEach()
set1.add(1); set1.add(2);
console.log("5. set1.forEach():");
set1.forEach(v=>console.log(v));
//  forEach() method Set ke har element pe function run karta hai.
// Output: 1
//         2

// 6. values()/keys()
console.log("6. set1.values():", [...set1.values()]);
console.log("6. set1.keys():", [...set1.keys()]);
//  values() aur keys() same iterator return karte hain (Set me key=value hota hai).
// Output: [1,2]

// 7. entries()
console.log("7. set1.entries():", [...set1.entries()]);
//  entries() method Set ke element ka [value,value] pair iterator return karta hai.
// Output: [[1,1],[2,2]]


//************************************Promise Methods (6)************************************** *//

let promise1 = new Promise((resolve,reject)=>resolve("Done"));

// 1. then()
promise1.then(res=>console.log("1. promise1.then():", res));
//  then() method success callback run karta hai jab promise resolved ho jaye.
// Output: Done

// 2. catch()
let promise2 = new Promise((resolve,reject)=>reject("Error"));
promise2.catch(err=>console.log("2. promise2.catch():", err));
//  catch() method error callback run karta hai jab promise reject ho jaye.
// Output: Error

// 3. finally()
promise1.finally(()=>console.log("3. promise1.finally(): Done"));
//  finally() hamesha run hota hai, chahe promise resolve ho ya reject.
// Output: Done

// 4. all()
Promise.all([Promise.resolve(1), Promise.resolve(2)])
.then(res=>console.log("4. Promise.all():", res));
//  all() tab resolve hota hai jab sab promises complete ho jaye, array return karta hai.
// Output: [1,2]

// 5. race()
Promise.race([Promise.resolve(1), Promise.resolve(2)])
.then(res=>console.log("5. Promise.race():", res));
//  race() pehla complete promise ka result return karta hai.
// Output: 1

// 6. allSettled()
Promise.allSettled([Promise.resolve(1), Promise.reject("Err")])
.then(res=>console.log("6. Promise.allSettled():", res));
//  allSettled() sab promises ka result deta hai, chahe resolve ho ya reject.
// Output: [{status:"fulfilled",value:1},{status:"rejected",reason:"Err"}]


//************************************Error Properties/Methods (4)************************************** *//

let err1 = new Error("Something went wrong");

// 1. message
console.log("1. err1.message:", err1.message);
//  Error ka message return karta hai.
// Output: Something went wrong

// 2. name
console.log("2. err1.name:", err1.name);
//  Error ka type return karta hai, default "Error" hota hai.
// Output: Error

// 3. stack
console.log("3. err1.stack:", err1.stack);
//  Error ka stack trace return karta hai, code execution path dikhata hai.
// Output: Error: Something went wrong at ...

// 4. toString()
console.log("4. err1.toString():", err1.toString());
//  Error object ko string me convert karta hai.
// Output: "Error: Something went wrong"


//************************************FUNCTION OBJECT METHODS / PROPERTIES************************************** *//


// Example function
function greet(firstName, lastName) {
    return `Hello, ${firstName} ${lastName}!`;
}

// 1️⃣ call() -----------------
let func_call = greet.call(null, "Aman", "Siddiqui");
console.log("1. greet.call(null,'Aman','Siddiqui'):", func_call);
//  Function ko call karta hai aur 'this' ko bind karta hai
// Output: "Hello, Aman Siddiqui!"

// 2️⃣ apply() -----------------
let func_apply = greet.apply(null, ["Muskaan", "Khan"]);
console.log("2. greet.apply(null,['Muskaan','Khan']):", func_apply);
//  Call jaisa hai, arguments array me pass hote hain
// Output: "Hello, Muskaan Khan!"

// 3️⃣ bind() -----------------
let func_bind = greet.bind(null, "Aman");
console.log("3. func_bind('Muskaan'):", func_bind("Muskaan"));
//  Naya function return karta hai, pre-set arguments ke sath
// Output: "Hello, Aman Muskaan!"

// 4️⃣ toString() -----------------
let func_toString = greet.toString();
console.log("4. greet.toString():", func_toString);
//  Function ka source code string me return karta hai
// Output: "function greet(firstName, lastName) { return `Hello, ${firstName} ${lastName}!`; }"

// 5️⃣ length -----------------
let func_length = greet.length;
console.log("5. greet.length:", func_length);
//  Function ke parameters ka count return karta hai
// Output: 2

// 6️⃣ name -----------------
let func_name = greet.name;
console.log("6. greet.name:", func_name);
//  Function ka naam return karta hai
// Output: "greet"

// 7️⃣ prototype -----------------
console.log("7. greet.prototype:", greet.prototype);
//  Har function ka prototype object hota hai (mostly for constructor functions)
// Output: { constructor: ƒ }

// 8️⃣ constructor -----------------
console.log("8. greet.constructor:", greet.constructor);
//  Function ka constructor return karta hai (Function constructor)
// Output: ƒ Function() { [native code] }
