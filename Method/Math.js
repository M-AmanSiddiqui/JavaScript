// Math object ka example

// 1. Math.abs()
let math_abs = Math.abs(-10);
console.log("1. Math.abs(-10):", math_abs);
//  Negative number ko positive me convert karta hai
// Output: 10

// 2. Math.ceil()
let math_ceil = Math.ceil(4.2);
console.log("2. Math.ceil(4.2):", math_ceil);
//  Number ko next integer tak round karta hai
// Output: 5

// 3. Math.floor()
let math_floor = Math.floor(4.8);
console.log("3. Math.floor(4.8):", math_floor);
//  Number ko previous integer tak round karta hai
// Output: 4

// 4. Math.round()
let math_round = Math.round(4.5);
console.log("4. Math.round(4.5):", math_round);
//  Number ko nearest integer tak round karta hai
// Output: 5

// 5. Math.max()
let math_max = Math.max(1,5,2,9,3);
console.log("5. Math.max(1,5,2,9,3):", math_max);
//  Sabse bada number return karta hai
// Output: 9

// 6. Math.min()
let math_min = Math.min(1,5,2,9,3);
console.log("6. Math.min(1,5,2,9,3):", math_min);
//  Sabse chhota number return karta hai
// Output: 1

// 7. Math.pow()
let math_pow = Math.pow(2,3);
console.log("7. Math.pow(2,3):", math_pow);
//  Exponentiation karta hai (2^3)
// Output: 8

// 8. Math.sqrt()
let math_sqrt = Math.sqrt(16);
console.log("8. Math.sqrt(16):", math_sqrt);
//  Square root nikalta hai
// Output: 4

// 9. Math.cbrt()
let math_cbrt = Math.cbrt(27);
console.log("9. Math.cbrt(27):", math_cbrt);
//  Cube root nikalta hai
// Output: 3

// 10. Math.random()
let math_random = Math.random();
console.log("10. Math.random():", math_random);
//  0 aur 1 ke beech random number generate karta hai
// Output: 0.123456 (example random)

// 11. Math.trunc()
let math_trunc = Math.trunc(4.9);
console.log("11. Math.trunc(4.9):", math_trunc);
//  Decimal part hata ke integer return karta hai
// Output: 4

// 12. Math.sign()
let math_sign1 = Math.sign(-10);
let math_sign2 = Math.sign(0);
let math_sign3 = Math.sign(15);
console.log("12. Math.sign(-10):", math_sign1);
console.log("12. Math.sign(0):", math_sign2);
console.log("12. Math.sign(15):", math_sign3);
//  Number ka sign detect karta hai (-1,0,1)
// Output: -1, 0, 1

// 13. Math.log()
let math_log = Math.log(Math.E);
console.log("13. Math.log(Math.E):", math_log);
//  Natural logarithm (ln) return karta hai
// Output: 1

// 14. Math.log10()
let math_log10 = Math.log10(1000);
console.log("14. Math.log10(1000):", math_log10);
//  Base 10 logarithm return karta hai
// Output: 3

// 15. Math.exp()
let math_exp = Math.exp(2);
console.log("15. Math.exp(2):", math_exp);
//  e^x calculate karta hai
// Output: 7.38905609893065

// 16. Math.sin()
let math_sin = Math.sin(Math.PI/2);
console.log("16. Math.sin(Math.PI/2):", math_sin);
//  Sine value return karta hai (radians)
// Output: 1

// 17. Math.cos()
let math_cos = Math.cos(0);
console.log("17. Math.cos(0):", math_cos);
//  Cosine value return karta hai
// Output: 1

// 18. Math.tan()
let math_tan = Math.tan(Math.PI/4);
console.log("18. Math.tan(Math.PI/4):", math_tan);
//  Tangent value return karta hai
// Output: 1

// 19. Math.PI
let math_PI = Math.PI;
console.log("19. Math.PI:", math_PI);
//  π (pi) ka value
// Output: 3.141592653589793

// 20. Math.E
let math_E = Math.E;
console.log("20. Math.E:", math_E);
//  e (Euler number) ka value
// Output: 2.718281828459045
