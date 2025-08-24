// Date example
let date1 = new Date("2025-08-23T21:00:00");

// 1. getDate()
let date_getDate = date1.getDate();
console.log("1. getDate():", date_getDate);
// Roman: Month me date return karta hai
// Output: 23

// 2. getDay()
let date_getDay = date1.getDay();
console.log("2. getDay():", date_getDay);
// Roman: Weekday number return karta hai (0=Sunday,...)
// Output: 6 (Saturday)

// 3. getFullYear()
let date_getFullYear = date1.getFullYear();
console.log("3. getFullYear():", date_getFullYear);
// Roman: Full year return karta hai
// Output: 2025

// 4. getMonth()
let date_getMonth = date1.getMonth();
console.log("4. getMonth():", date_getMonth);
// Roman: Month number return karta hai (0=Jan,...)
// Output: 7 (August)

// 5. getHours()
let date_getHours = date1.getHours();
console.log("5. getHours():", date_getHours);
// Roman: Hours return karta hai (0-23)
// Output: 21

// 6. getMinutes()
let date_getMinutes = date1.getMinutes();
console.log("6. getMinutes():", date_getMinutes);
// Roman: Minutes return karta hai
// Output: 0

// 7. getSeconds()
let date_getSeconds = date1.getSeconds();
console.log("7. getSeconds():", date_getSeconds);
// Roman: Seconds return karta hai
// Output: 0

// 8. getMilliseconds()
let date_getMilliseconds = date1.getMilliseconds();
console.log("8. getMilliseconds():", date_getMilliseconds);
// Roman: Milliseconds return karta hai
// Output: 0

// 9. getTime()
let date_getTime = date1.getTime();
console.log("9. getTime():", date_getTime);
// Roman: Epoch time (ms since Jan 1, 1970) return karta hai
// Output: 1761241200000

// 10. setDate()
let date_setDate = new Date(date1);
date_setDate.setDate(25);
console.log("10. setDate(25):", date_setDate);
// Roman: Date change karta hai
// Output: Sun Aug 25 2025 21:00:00 GMT+0000

// 11. setMonth()
let date_setMonth = new Date(date1);
date_setMonth.setMonth(11);
console.log("11. setMonth(11):", date_setMonth);
// Roman: Month change karta hai (0=Jan)
// Output: Tue Dec 23 2025 21:00:00 GMT+0000

// 12. setFullYear()
let date_setFullYear = new Date(date1);
date_setFullYear.setFullYear(2030);
console.log("12. setFullYear(2030):", date_setFullYear);
// Roman: Year change karta hai
// Output: Sat Aug 23 2030 21:00:00 GMT+0000

// 13. setHours()
let date_setHours = new Date(date1);
date_setHours.setHours(10);
console.log("13. setHours(10):", date_setHours);
// Roman: Hours change karta hai
// Output: Sat Aug 23 2025 10:00:00 GMT+0000

// 14. toDateString()
let date_toDateString = date1.toDateString();
console.log("14. toDateString():", date_toDateString);
// Roman: Readable date string return karta hai
// Output: "Sat Aug 23 2025"

// 15. toTimeString()
let date_toTimeString = date1.toTimeString();
console.log("15. toTimeString():", date_toTimeString);
// Roman: Time string return karta hai
// Output: "21:00:00 GMT+0000 (Coordinated Universal Time)"

// 16. toISOString()
let date_toISOString = date1.toISOString();
console.log("16. toISOString():", date_toISOString);
// Roman: ISO format me string return karta hai
// Output: "2025-08-23T21:00:00.000Z"

// 17. toJSON()
let date_toJSON = date1.toJSON();
console.log("17. toJSON():", date_toJSON);
// Roman: JSON format me string return karta hai
// Output: "2025-08-23T21:00:00.000Z"

// 18. toLocaleDateString()
let date_toLocaleDateString = date1.toLocaleDateString();
console.log("18. toLocaleDateString():", date_toLocaleDateString);
// Roman: Local date string return karta hai
// Output: "8/23/2025" (locale ke hisaab se)

// 19. toLocaleTimeString()
let date_toLocaleTimeString = date1.toLocaleTimeString();
console.log("19. toLocaleTimeString():", date_toLocaleTimeString);
// Roman: Local time string return karta hai
// Output: "9:00:00 PM"

// 20. toString()
let date_toString = date1.toString();
console.log("20. toString():", date_toString);
// Roman: Default date string return karta hai
// Output: "Sat Aug 23 2025 21:00:00 GMT+0000 (Coordinated Universal Time)"

// 21. valueOf()
let date_valueOf = date1.valueOf();
console.log("21. valueOf():", date_valueOf);
// Roman: Epoch time (ms) return karta hai
// Output: 1761241200000
