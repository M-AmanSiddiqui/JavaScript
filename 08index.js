//Maps
//const num = [1,2,3,4,5,6,7,8,9]

//with scope
//const mynums = num.map( (num) => { return num + 10})
//console.log(mynums);

// Without Scope
// const mynums = num.map( (num) =>  num + 10)
// console.log(mynums);



// Reduce
// with normal function
// const num = [1,2,3,4,5]
// const total = num.reduce(function (acc,curr) {
//     console.log(`acc: ${acc} and curr: ${curr}`);
    
//     return acc + curr
// },0 )
// console.log(total);


// with arrow function
// const num = [1,2,3,4,5]
// const total = num.reduce( (acc,curr) => acc+curr, 0)
// console.log(total);

// Example with cart


const products = [
  {
    id: 1,
    name: "Laptop",
    price: 1200,
    category: "Electronics",
    inStock: true
  },
  {
    id: 2,
    name: "Smartphone",
    price: 800,
    category: "Electronics",
    inStock: true
  },
  {
    id: 3,
    name: "Headphones",
    price: 150,
    category: "Accessories",
    inStock: false
  },
  {
    id: 4,
    name: "Keyboard",
    price: 70,
    category: "Accessories",
    inStock: true
  },
  {
    id: 5,
    name: "Running Shoes",
    price: 100,
    category: "Fashion",
    inStock: true
  },]

  const add = products.reduce((acc,products) => acc + products.price , 0)
  console.log(add);
  