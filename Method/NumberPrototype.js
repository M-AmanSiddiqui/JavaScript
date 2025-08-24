// JavaScript Number Prototype Methods & Properties

// 1. toString(base)
let num1 = 255;
console.log(num1.toString());      // "255"
console.log(num1.toString(16));    // "ff"
// Roman: Number ko string banata hai. Base 16 → Hexadecimal, base 2 → Binary.

// 2. toFixed(digits)
let num2 = 3.14159;
console.log(num2.toFixed(2));      // "3.14"
console.log(num2.toFixed(4));      // "3.1416"
// Roman: Number ko round karke fixed decimal digits tak dikhata hai (e.g. money).

// 3. toExponential(digits)
let num3 = 12345;
console.log(num3.toExponential(2)); // "1.23e+4"
// Roman: Scientific (exponential) notation dikhata hai. Bara/chhota number ke liye.

// 4. toPrecision(digits)
let num4 = 3.14159;
console.log(num4.toPrecision(3));  // "3.14"
console.log(num4.toPrecision(5));  // "3.1416"
// Roman: Total digits count karta hai (decimal ke aage/peeche dono).

// 5. valueOf()
let num5 = new Number(100);
console.log(num5.valueOf());       // 100
// Roman: Number object ka primitive value return karta hai.

// 6. Number.isInteger(x)
console.log(Number.isInteger(10));   // true
console.log(Number.isInteger(10.5)); // false
// Roman: Check karta hai ke integer hai ya float.

// 7. Number.isNaN(x)
console.log(Number.isNaN(NaN));      // true
console.log(Number.isNaN(123));      // false
// Roman: Ye NaN (Not-a-Number) check karne ke liye hai. "==" isme kaam nahi karta.

// 8. Number.isFinite(x)
console.log(Number.isFinite(100));     // true
console.log(Number.isFinite(Infinity)); // false
// Roman: Dekhta hai ke value finite hai ya Infinite/NaN.

// 9. Number.parseInt(str)
console.log(Number.parseInt("123"));     // 123
console.log(Number.parseInt("123.45"));  // 123
// Roman: String ko integer banata hai. Decimal part cut ho jata hai.

// 10. Number.parseFloat(str)
console.log(Number.parseFloat("123.45")); // 123.45
// Roman: String ko float number banata hai (decimal bhi rakhta hai).

// 11. Number.MAX_VALUE
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
// Roman: JS ka sabse bara number.

// 12. Number.MIN_VALUE
console.log(Number.MIN_VALUE); // 5e-324
// Roman: JS ka sabse chhota positive number (0 se bara).

// 13. Number.POSITIVE_INFINITY
console.log(Number.POSITIVE_INFINITY); // Infinity
// Roman: Positive infinity value.

// 14. Number.NEGATIVE_INFINITY
console.log(Number.NEGATIVE_INFINITY); // -Infinity
// Roman: Negative infinity value.

// 15. Number.NaN
console.log(Number.NaN); // NaN
// Roman: Special value jo "Not a Number" ko represent karti hai.
