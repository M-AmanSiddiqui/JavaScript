// Number Example
let num1 = 123.456;

// 1. toString()
let num_toString = num1.toString();
console.log("1. toString():", num_toString);
// Roman: Number ko string me convert karta hai
// Use-case: Agar number ko string ke sath join ya display karna ho
// Output: "123.456"

// 2. toExponential()
let num_toExponential = num1.toExponential(2);
console.log("2. toExponential(2):", num_toExponential);
// Roman: Number ko exponential/scientific notation me convert karta hai
// Output: "1.23e+2"

// 3. toFixed()
let num_toFixed = num1.toFixed(2);
console.log("3. toFixed(2):", num_toFixed);
// Roman: Number ko specified decimal places tak round karke string return karta hai
// Output: "123.46"

// 4. toPrecision()
let num_toPrecision = num1.toPrecision(5);
console.log("4. toPrecision(5):", num_toPrecision);
// Roman: Number ko total digits ke basis par round karke string return karta hai
// Output: "123.46"

// 5. valueOf()
let num_valueOf = num1.valueOf();
console.log("5. valueOf():", num_valueOf);
// Roman: Number object ka primitive value return karta hai
// Output: 123.456

// 6. Number.isInteger()
let num_isInteger = Number.isInteger(num1);
console.log("6. Number.isInteger():", num_isInteger);
// Roman: Check karta hai ke number integer hai ya nahi
// Output: false

// 7. Number.isNaN()
let num_isNaN = Number.isNaN(NaN);
console.log("7. Number.isNaN():", num_isNaN);
// Roman: Check karta hai value NaN hai ya nahi
// Output: true

// 8. Number.isFinite()
let num_isFinite = Number.isFinite(num1);
console.log("8. Number.isFinite():", num_isFinite);
// Roman: Check karta hai value finite number hai ya nahi
// Output: true

// 9. Number.parseInt()
let num_parseInt = Number.parseInt("123.456");
console.log("9. Number.parseInt('123.456'):", num_parseInt);
// Roman: String ko integer number me convert karta hai
// Output: 123

// 10. Number.parseFloat()
let num_parseFloat = Number.parseFloat("123.456");
console.log("10. Number.parseFloat('123.456'):", num_parseFloat);
// Roman: String ko float number me convert karta hai
// Output: 123.456

// 11. Number.MAX_VALUE
let num_max = Number.MAX_VALUE;
console.log("11. Number.MAX_VALUE:", num_max);
// Roman: JavaScript me maximum possible number
// Output: 1.7976931348623157e+308

// 12. Number.MIN_VALUE
let num_min = Number.MIN_VALUE;
console.log("12. Number.MIN_VALUE:", num_min);
// Roman: JavaScript me smallest positive number
// Output: 5e-324

// 13. Number.POSITIVE_INFINITY
let num_posInf = Number.POSITIVE_INFINITY;
console.log("13. Number.POSITIVE_INFINITY:", num_posInf);
// Roman: Positive infinity ko represent karta hai
// Output: Infinity

// 14. Number.NEGATIVE_INFINITY
let num_negInf = Number.NEGATIVE_INFINITY;
console.log("14. Number.NEGATIVE_INFINITY:", num_negInf);
// Roman: Negative infinity ko represent karta hai
// Output: -Infinity

// 15. Number.NaN
let num_NaN = Number.NaN;
console.log("15. Number.NaN:", num_NaN);
// Roman: Special value jo Not-a-Number ko represent karti hai
// Output: NaN
