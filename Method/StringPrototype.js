let str = "Hello World";

// 1. length
let str_length = str.length;
console.log("1. length:", str_length);
// Roman: Ye property string ke characters ki total count return karti hai.
// Use-case: String ki length check karne ke liye.
// Output: 11

// 2. charAt()
let str_charAt = str.charAt(0);
console.log("2. charAt(0):", str_charAt);
// Roman: Is method se tu string ke kisi specific index ka character nikal sakta hai.
// Example: index 0 ka character "H" return hota hai.
// Output: "H"

// 3. charCodeAt()
let str_charCodeAt = str.charCodeAt(0);
console.log("3. charCodeAt(0):", str_charCodeAt);
// Roman: Ye method string ke character ka Unicode (ASCII) code number return karta hai.
// Use-case: Character ke Unicode ko get karne ke liye.
// Output: 72

// 4. codePointAt()
let str_codePointAt = str.codePointAt(0);
console.log("4. codePointAt(0):", str_codePointAt);
// Roman: Unicode code point return karta hai. Extended Unicode characters ke liye useful.
// Output: 72

// 5. concat()
let str_concat = str.concat("!", " JS");
console.log("5. concat('!',' JS'):", str_concat);
// Roman: Multiple strings ko combine karke ek naya string return karta hai.
// Use-case: String join karne ke liye.
// Output: "Hello World! JS"

// 6. includes()
let str_includes = str.includes("World");
console.log("6. includes('World'):", str_includes);
// Roman: Check karta hai substring exist karti hai ya nahi. Boolean return karta hai.
// Output: true

// 7. endsWith()
let str_endsWith = str.endsWith("World");
console.log("7. endsWith('World'):", str_endsWith);
// Roman: Check karta hai string ka last part specified substring se match karta hai ya nahi.
// Output: true

// 8. startsWith()
let str_startsWith = str.startsWith("Hello");
console.log("8. startsWith('Hello'):", str_startsWith);
// Roman: Check karta hai string ka start specified substring se match karta hai ya nahi.
// Output: true

// 9. indexOf()
let str_indexOf = str.indexOf("o");
console.log("9. indexOf('o'):", str_indexOf);
// Roman: Ye method substring/character ka **first occurrence index** return karta hai. Agar nahi mile to -1.
// Output: 4

// 10. lastIndexOf()
let str_lastIndexOf = str.lastIndexOf("o");
console.log("10. lastIndexOf('o'):", str_lastIndexOf);
// Roman: Ye method substring/character ka **last occurrence index** return karta hai.
// Output: 7

// 11. slice()
let str_slice = str.slice(0,5);
console.log("11. slice(0,5):", str_slice);
// Roman: Start aur end index ke beech ka part extract karta hai aur naya string return karta hai.
// Original string change nahi hota.
// Output: "Hello"

// 12. substring()
let str_substring = str.substring(6,11);
console.log("12. substring(6,11):", str_substring);
// Roman: Slice jaisa kaam karta hai, lekin negative index allow nahi karta. 
// Output: "World"

// 13. substr()  // Deprecated
let str_substr = str.substr(6,5);
console.log("13. substr(6,5):", str_substr);
// Roman: Start index aur length specify karke part nikalta hai. Use modern JS me avoid karein.
// Output: "World"

// 14. toUpperCase()
let str_toUpperCase = str.toUpperCase();
console.log("14. toUpperCase():", str_toUpperCase);
// Roman: String ke sab characters ko uppercase me convert karta hai.
// Output: "HELLO WORLD"

// 15. toLowerCase()
let str_toLowerCase = str.toLowerCase();
console.log("15. toLowerCase():", str_toLowerCase);
// Roman: String ke sab characters ko lowercase me convert karta hai.
// Output: "hello world"

// 16. trim()
let str_trim = "   JS   ".trim();
console.log("16. trim():", str_trim);
// Roman: Start aur end ke extra spaces remove karta hai, beech ka space untouched.
// Output: "JS"

// 17. trimStart()
let str_trimStart = "   JS   ".trimStart();
console.log("17. trimStart():", str_trimStart);
// Roman: Sirf start ke spaces remove karta hai.
// Output: "JS   "

// 18. trimEnd()
let str_trimEnd = "   JS   ".trimEnd();
console.log("18. trimEnd():", str_trimEnd);
// Roman: Sirf end ke spaces remove karta hai.
// Output: "   JS"

// 19. padStart()
let str_padStart = "5".padStart(3,"0");
console.log("19. padStart(3,'0'):", str_padStart);
// Roman: String ke start me padding characters add karta hai specified length tak.
// Output: "005"

// 20. padEnd()
let str_padEnd = "5".padEnd(3,"0");
console.log("20. padEnd(3,'0'):", str_padEnd);
// Roman: String ke end me padding characters add karta hai.
// Output: "500"

// 21. repeat()
let str_repeat = "Ha".repeat(3);
console.log("21. repeat(3):", str_repeat);
// Roman: String ko specified times repeat karke naya string return karta hai.
// Output: "HaHaHa"

// 22. split()
let str_split = str.split(" ");
console.log("22. split(' '):", str_split);
// Roman: String ko array me convert karta hai, separator ke basis par.
// Output: [ 'Hello', 'World' ]

// 23. replace()
let str_replace = str.replace("World", "JS");
console.log("23. replace('World','JS'):", str_replace);
// Roman: Pehli occurrence ko replace karta hai, original string unchanged.
// Output: "Hello JS"

// 24. replaceAll()
let str_replaceAll = "Hi Hi Hi".replaceAll("Hi","Hello");
console.log("24. replaceAll('Hi','Hello'):", str_replaceAll);
// Roman: Sab occurrences ko replace karta hai.
// Output: "Hello Hello Hello"

// 25. match()
let str_match = str.match(/o/g);
console.log("25. match(/o/g):", str_match);
// Roman: Regex ke basis par matches return karta hai array me.
// Output: [ 'o', 'o' ]

// 26. matchAll()
let str_matchAll = [...str.matchAll(/o/g)];
console.log("26. matchAll(/o/g):", str_matchAll);
// Roman: Iterator ke form me sab matches deta hai, index aur groups ke sath.
// Output: [ [ 'o', index: 4, ... ], [ 'o', index: 7, ... ] ]

// 27. search()
let str_search = str.search("World");
console.log("27. search('World'):", str_search);
// Roman: First occurrence ka index return karta hai regex/string ke basis par.
// Output: 6

// 28. localeCompare()
let str_localeCompare = "a".localeCompare("b");
console.log("28. localeCompare('b'):", str_localeCompare);
// Roman: Strings ko compare karta hai, -1 agar pehla chhota, 0 agar equal, 1 agar pehla bada
// Output: -1

// 29. normalize()
let str_normalize = "e\u0301".normalize("NFC");
console.log("29. normalize('NFC'):", str_normalize);
// Roman: Unicode characters ko standard form me normalize karta hai
// Output: "é"

// 30. valueOf()
let str_valueOf = str.valueOf();
console.log("30. valueOf():", str_valueOf);
// Roman: Primitive string value return karta hai (object string nahi)
// Output: "Hello World"
