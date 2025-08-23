// 1. charAt()
const str1 = "Hello";
console.log(str1.charAt(1)); // => "e"
// index 1 par konsa character hai

// 2. charCodeAt()
console.log(str1.charCodeAt(1)); // => 101
// index 1 par character ka UTF-16 code

// 3. codePointAt()
console.log("🙂".codePointAt(0)); // => 128578
// emoji ya Unicode character ka code point

// 4. concat()
console.log("Hello ".concat("World")); // => "Hello World"
// do strings ko jorna

// 5. includes()
console.log("JavaScript".includes("Script")); // => true
// check krta hai substring hai ya nhi

// 6. endsWith()
console.log("image.png".endsWith(".png")); // => true
// string kis word pr end ho rahi hai

// 7. indexOf()
console.log("banana".indexOf("a")); // => 1
// first index jahan 'a' mila

// 8. lastIndexOf()
console.log("banana".lastIndexOf("a")); // => 5
// last index jahan 'a' mila

// 9. match()
console.log("abc123".match(/\d+/)); // => ["123"]
// regex match karta hai

// 10. matchAll()
const matches = [..."test1test2".matchAll(/\d/g)];
console.log(matches); // => [["1"], ["2"]]
// sabhi regex matches deta hai

// 11. normalize()
console.log("\u0041\u030A".normalize()); // => "Å"
// Unicode ko normalize karta hai

// 12. padEnd()
console.log("5".padEnd(4, "0")); // => "5000"
// string ke end par padding add krta hai

// 13. padStart()
console.log("5".padStart(4, "0")); // => "0005"
// string ke start par padding add krta hai

// 14. repeat()
console.log("ha".repeat(3)); // => "hahaha"
// string ko repeat karta hai

// 15. replace()
console.log("Hello World".replace("World", "Aman")); // => "Hello Aman"
// first match ko replace karta hai

// 16. replaceAll()
console.log("aa bb aa".replaceAll("aa", "xx")); // => "xx bb xx"
// sabhi matches ko replace karta hai

// 17. search()
console.log("abc123".search(/\d/)); // => 3
// regex se search karta hai

// 18. slice()
console.log("JavaScript".slice(0, 4)); // => "Java"
// substring deta hai start aur end index se

// 19. split()
console.log("a,b,c".split(",")); // => ["a", "b", "c"]
// string ko array mein convert karta hai

// 20. startsWith()
console.log("Hello World".startsWith("Hello")); // => true
// string kis word se start ho rahi hai

// 21. substring()
console.log("abcdef".substring(1, 4)); // => "bcd"
// part of string from index

// 22. toLowerCase()
console.log("HELLO".toLowerCase()); // => "hello"
// lowercase mein convert karta hai

// 23. toUpperCase()
console.log("hello".toUpperCase()); // => "HELLO"
// uppercase mein convert karta hai

// 24. trim()
console.log("  hello  ".trim()); // => "hello"
// dono side ke spaces remove karta hai

// 25. trimStart()
console.log("  hello".trimStart()); // => "hello"
// sirf start ka space hatata hai

// 26. trimEnd()
console.log("hello  ".trimEnd()); // => "hello"
// sirf end ka space hatata hai

// 27. toString()
const strObj = new String("text");
console.log(strObj.toString()); // => "text"
// string object ko primitive string banata hai

// 28. valueOf()
console.log(strObj.valueOf()); // => "text"
// primitive value return karta hai

// 29. length (property)
console.log("Hello".length); // => 5
// string ka length return karta hai

// 30. Symbol.iterator
const text = "ABC";
for (let char of text) {
  console.log(char); // A B C
}
