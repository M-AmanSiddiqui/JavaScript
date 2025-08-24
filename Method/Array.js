// Example arrays
let arr1 = [1,2,3,4,5];
let arr2 = [10,20,30,40,50];

// ----------------- Mutator Methods -----------------//

// 1. push()
let arr_push = [...arr1]; // copy original
arr_push.push(6);
console.log("1. push(6):", arr_push);
// Roman: Array ke end me element add karta hai
// Output: [ 1,2,3,4,5,6 ]

// 2. pop()
let arr_pop = [...arr1];
let popped_val = arr_pop.pop();
console.log("2. pop():", popped_val, arr_pop);
// Roman: Last element remove karta hai aur return karta hai
// Output: 5 [1,2,3,4]

// 3. shift()
let arr_shift = [...arr1];
let shifted_val = arr_shift.shift();
console.log("3. shift():", shifted_val, arr_shift);
// Roman: First element remove karta hai aur return karta hai
// Output: 1 [2,3,4,5]

// 4. unshift()
let arr_unshift = [...arr1];
arr_unshift.unshift(0);
console.log("4. unshift(0):", arr_unshift);
// Roman: Array ke start me element add karta hai
// Output: [0,1,2,3,4,5]

// 5. splice()
let arr_splice = [...arr1];
arr_splice.splice(1,2,"a","b");
console.log("5. splice(1,2,'a','b'):", arr_splice);
// Roman: Beech me elements remove aur add karta hai
// Output: [1,'a','b',4,5]

// 6. sort()
let arr_sort = [3,1,4,2];
arr_sort.sort();
console.log("6. sort():", arr_sort);
// Roman: Array ko ascending order me sort karta hai (default string compare)
// Output: [1,2,3,4]

// 7. reverse()
let arr_reverse = [...arr_sort];
arr_reverse.reverse();
console.log("7. reverse():", arr_reverse);
// Roman: Array order ko ulta kar deta hai
// Output: [4,3,2,1]

// 8. fill()
let arr_fill = [1,2,3,4];
arr_fill.fill(0,1,3);
console.log("8. fill(0,1,3):", arr_fill);
// Roman: Start-end index ke beech value se fill karta hai
// Output: [1,0,0,4]

// 9. copyWithin()
let arr_copyWithin = [1,2,3,4];
arr_copyWithin.copyWithin(1,2,4);
console.log("9. copyWithin(1,2,4):", arr_copyWithin);
// Roman: Array ke part ko copy karke dusre index par replace karta hai
// Output: [1,3,4,4]

// 10. reverse() // Already done above

// ----------------- Accessor Methods -----------------//

// 10. concat()
let arr_concat = arr1.concat([6,7]);
console.log("10. concat([6,7]):", arr_concat);
// Roman: Arrays ko merge karta hai aur naya array return karta hai
// Output: [1,2,3,4,5,6,7]

// 11. join()
let arr_join = arr1.join("-");
console.log("11. join('-'):", arr_join);
// Roman: Array elements ko string me separator ke sath join karta hai
// Output: "1-2-3-4-5"

// 12. slice()
let arr_slice = arr1.slice(1,4);
console.log("12. slice(1,4):", arr_slice);
// Roman: Array ka part nikalta hai, original change nahi hota
// Output: [2,3,4]

// 13. includes()
let arr_includes = arr1.includes(3);
console.log("13. includes(3):", arr_includes);
// Roman: Check karta hai element exist karta hai ya nahi, Boolean return karta hai
// Output: true

// 14. indexOf()
let arr_indexOf = arr1.indexOf(3);
console.log("14. indexOf(3):", arr_indexOf);
// Roman: Element ka first index return karta hai
// Output: 2

// 15. lastIndexOf()
let arr_lastIndexOf = [1,2,3,2].lastIndexOf(2);
console.log("15. lastIndexOf(2):", arr_lastIndexOf);
// Roman: Element ka last index return karta hai
// Output: 3

// 16. toString()
let arr_toString = arr1.toString();
console.log("16. toString():", arr_toString);
// Roman: Array ko string me convert karta hai
// Output: "1,2,3,4,5"

// 17. toLocaleString()
let arr_toLocaleString = [123456].toLocaleString();
console.log("17. toLocaleString():", arr_toLocaleString);
// Roman: Array ke numbers ko local format me convert karta hai
// Output: "123,456"

// ----------------- Iteration Methods -----------------//

// 18. forEach()
console.log("18. forEach():");
arr1.forEach(x=>console.log(x));
// Roman: Har element pe function run karta hai, return nahi karta
// Output: 1 2 3 4 5 (line by line)

// 19. map()
let arr_map = arr1.map(x=>x*2);
console.log("19. map(x*2):", arr_map);
// Roman: Har element ko transform karke naya array return karta hai
// Output: [2,4,6,8,10]

// 20. filter()
let arr_filter = arr1.filter(x=>x>2);
console.log("20. filter(x>2):", arr_filter);
// Roman: Condition match karne wale elements return karta hai
// Output: [3,4,5]

// 21. reduce()
let arr_reduce = arr1.reduce((a,b)=>a+b,0);
console.log("21. reduce(sum):", arr_reduce);
// Roman: Array ko single value me reduce karta hai
// Output: 15

// 22. reduceRight()
let arr_reduceRight = [1,2,3].reduceRight((a,b)=>a-b,0);
console.log("22. reduceRight(a-b):", arr_reduceRight);
// Roman: Right se left reduce karta hai
// Output: -2

// 23. some()
let arr_some = arr1.some(x=>x>3);
console.log("23. some(x>3):", arr_some);
// Roman: Agar kisi element pe condition true ho to true return karta hai
// Output: true

// 24. every()
let arr_every = arr1.every(x=>x>0);
console.log("24. every(x>0):", arr_every);
// Roman: Sab elements condition satisfy kare to true return karta hai
// Output: true

// 25. find()
let arr_find = arr1.find(x=>x>3);
console.log("25. find(x>3):", arr_find);
// Roman: Pehla element jo condition satisfy kare return karta hai
// Output: 4

// 26. findIndex()
let arr_findIndex = arr1.findIndex(x=>x>3);
console.log("26. findIndex(x>3):", arr_findIndex);
// Roman: Pehla index jo condition satisfy kare return karta hai
// Output: 3

// 27. flat()
let arr_flat = [1,[2,3],[4]].flat();
console.log("27. flat():", arr_flat);
// Roman: Nested arrays ko flatten karta hai
// Output: [1,2,3,4]

// 28. flatMap()
let arr_flatMap = [1,2,3].flatMap(x=>[x,x*2]);
console.log("28. flatMap(x=>[x,x*2]):", arr_flatMap);
// Roman: Map + flatten ek sath karta hai
// Output: [1,2,2,4,3,6]

// 29. entries()
let arr_entries = [...arr1.entries()];
console.log("29. entries():", arr_entries);
// Roman: [index,value] pair return karta hai
// Output: [[0,1],[1,2],[2,3],[3,4],[4,5]]

// 30. keys()
let arr_keys = [...arr1.keys()];
console.log("30. keys():", arr_keys);
// Roman: Array ke index keys return karta hai
// Output: [0,1,2,3,4]

// 31. values()
let arr_values = [...arr1.values()];
console.log("31. values():", arr_values);
// Roman: Array ke values return karta hai
// Output: [1,2,3,4,5]

// 32. findLast()
let arr_findLast = [1,2,3,4].findLast(x=>x>2);
console.log("32. findLast(x>2):", arr_findLast);
// Roman: Last element jo condition satisfy kare return karta hai
// Output: 4

// 33. findLastIndex()
let arr_findLastIndex = [1,2,3,4].findLastIndex(x=>x>2);
console.log("33. findLastIndex(x>2):", arr_findLastIndex);
// Roman: Last index jo condition satisfy kare return karta hai
// Output: 3
