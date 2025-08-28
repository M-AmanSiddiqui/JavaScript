// filter

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
  },
  {
    id: 6,
    name: "Backpack",
    price: 60,
    category: "Fashion",
    inStock: true
  },
  {
    id: 7,
    name: "Washing Machine",
    price: 500,
    category: "Home Appliances",
    inStock: false
  },
  {
    id: 8,
    name: "Microwave",
    price: 200,
    category: "Home Appliances",
    inStock: true
  },
  {
    id: 9,
    name: "Gaming Chair",
    price: 250,
    category: "Furniture",
    inStock: true
  },
  {
    id: 10,
    name: "Table Lamp",
    price: 40,
    category: "Furniture",
    inStock: true
  }
];


let newpro = products.filter( (pr) => {
    return pr.category === "Fashion" && pr.price === 100
})
console.log(newpro);
