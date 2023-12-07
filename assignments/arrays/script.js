var arr = []
// console.log(arr);

var arr1 =[11,22,33,44,55,66];
// console.log(arr1);
arr2 = arr1.length
// console.log(arr2);

// console.log(arr1[0]);
// console.log(arr1.);

arr3 = arr2 - 1;
// console.log(arr3);
// console.log(arr1[arr3]);

arr4 = arr2/2;
// console.log(arr4);
// console.log(arr1[arr4]);

var mixedDataTypes = [ 1, "Akash", 0.5, "Hello world this is Akash", true,6948 ]
 console.log(mixedDataTypes.length);

 var itCompanies = ["Facebook", "Google", "microsoft", "apple", "IBM", "Oracle", "amazon"]
 console.log(itCompanies);

 companylength = itCompanies.length
 console.log(companylength);

 last = companylength - 1;
 var mid1 = last/2
 console.log(mid1);


//  console.log(itCompanies[0]);
//  console.log(itCompanies[last]);
//  console.log(itCompanies[mid1]);

 for(var i=0; i< itCompanies.length;i++){
       console.log(itCompanies[i].toUpperCase());
     //  console.log(itCompanies[i].toUpperCase());
 }
 
 var sen = itCompanies.pop()
 console.log(sen);

 console.log(itCompanies.join(),"and" ,sen,"are big IT companies.");

 console.log(itCompanies.includes("Oracle"));

 ////////////////////////////////////////////////////////////////
               // EXERCISE - ARRAY - II

var shoppingCart = ['Milk','Coffee','Tea','Honey']

nan = shoppingCart.includes('Meat')
nana = shoppingCart.includes('suger')
console.log(nan);

if (nan==false) {
     shoppingCart.push('meat')
     console.log(shoppingCart);
     
}else{
     console.log('the meat is present in the array');
}

if (nana!=true) {
     shoppingCart.push('suger')
     console.log(shoppingCart);
     
}else{
     console.log('the suger is present in the array');
}

shoppingCart.splice(shoppingCart.indexOf('Honey'),1)

console.log(shoppingCart);

shoppingCart.splice(shoppingCart.indexOf('Tea'),1,'Green Tea')
console.log(shoppingCart);

var countries =['china','Japan','america','Isreal','Italy']

con = countries.includes('India')

if (con==false) {
     countries.unshift('India')
     console.log(countries);
     
}else{
     console.log("It allready exist");
}

var frontEnd = ['HTML','CSS','JS','React'];
var backEnd = ['Node','Express','MongoDB'];

fullStack = frontEnd.concat(backEnd)

console.log(fullStack);


//////////////////////////////////////////////////////////////////////////
               //     EXERCISE - ARRAY - III

var ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

console.log(ages);
console.log("sorting and finding the min and max value");

ages1 = ages.sort()

console.log(ages1);

console.log("min age :",ages[0]);
console.log("max age :",ages[ages.length-1]);


 

