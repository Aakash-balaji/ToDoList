
console.log("            MAP");

var array = ["melon","banana","apple","orange","lemon"];
array = array.map(function(upper) {
    return upper.toUpperCase()
})

console.log(array);

arrar2 =[1,2,3,4,5,6,7,8,9,10]

array2 = arrar2.map(function(squre){
    return squre*squre
})

console.log(array2);

var products = [
    { name: "Product 1", price: 10 },
    { name: "Product 2", price: 20 },
    { name: "Product 3", price: 30 },
    { name: "Product 4", price: 40 },
    { name: "Product 5", price: 50 },
    { name: "Product 6", price: 60 },
    { name: "Product 7", price: 70 },
    { name: "Product 8", price: 80 },
    { name: "Product 9", price: 90 },
    { name: "Product 10", price: 100 }
  ];

  var productsName = products.map((pro) => pro.name)

  console.log(productsName);

  //////////////////////////////////////////////////////////
console.log("            FILTER");

  let numbers = Array.from({length: 10}, (_, i) => i + 1);
  console.log(numbers);

  var even = numbers.filter(function(number){
    return number%2==0;
  });

  console.log(even);

  console.log();
  // var arraycoun = []
  let countries = ["India", "United States", "China", "Japan", "Germany", "United Kingdom", "France", "Italy", "Brazil", "Canada"];
var countries6 = countries.filter((six)=>six.length<=5)

console.log(countries6);

let startWith = countries.filter((event)=> event.charAt(0)==="I")
console.log(startWith);

let product = [
  {
      name: "Laptop",
      price: 10.99
  },
  {
      name: "T-shirt",
      price: 7.49
  },
  {
      name: "Headphones",
      price: 12.99
  },
  {
      name: "Sneakers",
      price: 9.99
  },
  {
      name: "Watch",
      price: 14.95
  }
];

console.log(product);

let priceLessThen = product.filter((item)=> item.price< 10)
console.log(priceLessThen);

let employees = [
  { name: "Employee 1", salary: 48000 },
  { name: "Employee 2", salary: 52000 },
  { name: "Employee 3", salary: 47000 },
  { name: "Employee 4", salary: 55000 },
  { name: "Employee 5", salary: 60000 }
];

salaryMore = employees.filter((item)=> item.salary>=50000)
console.log(salaryMore);


//////////////////////////////////////////////////////////////////////////////////////
console.log("             REDUCE");
                
let arrayOfNo = [1,2,3,4,5,6,7,8,9,10]

sum = arrayOfNo.reduce((a,b)=> a+b)
console.log(sum);
console.log();

let arrayOfString = ['Hello',' my',' name',' is', ' Akash']
fullName = arrayOfString.reduce((a,b)=>a+b)
console.log(fullName);
console.log();

let productreduce = [
  {
      name: "Laptop",
      price: 10.99
  },
  {
      name: "T-shirt",
      price: 7.49
  },
  {
      name: "Headphones",
      price: 12.99
  },
  {
      name: "Sneakers",
      price: 9.99
  },
  {
      name: "Watch",
      price: 14.95
  }
];

totalPrice = productreduce.reduce((a,b)=> a+b.price,0)
console.log(totalPrice);
console.log();

let transactions = [
  { type: "debit", amount: 50 },
  { type: "credit", amount: 100 },
  { type: "debit", amount: 30 },
  { type: "debit", amount: 50 },
  { type: "debit", amount: 40 },
  { type: "debit", amount: 70 },
  { type: "credit", amount: 110 },
  { type: "debit", amount: 35 },
  { type: "credit", amount: 180 },
];

balance = transactions.reduce((balance,transactions)=> {

  if(transactions.type=="credit"){
      return balance + transactions.amount
  }else{
    return balance - transactions.amount
  }

  
},0)
console.log('Total account Balance is :',balance);

