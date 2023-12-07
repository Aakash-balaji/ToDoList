
var str = "hello world"

capital = str.toUpperCase();
console.log(capital);

sli = str.slice(0,5);
console.log(sli)

var str2 = ('Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon');
spt = str2.split(",")
console.log(spt);

index = str.indexOf("l")
console.log(index);
index1 = str.lastIndexOf("l")
console.log(index1);

str3 =  'Javascript is used ';
str4 = 'to add functionalities to the web app';
console.log(str5 = str3 + str4);

ser = str5.search("Javascript")
console.log(ser);

var str6 = Math.round(Math.random()*100);
console.log(str6);
var min=50;
var max=100;
var str7 = Math.floor(Math.random()*(max - min+1)) + min;
console.log(str7);

console.log("11111\n21248\n313927\n4141664\n51525125\n");


saler = 'He earns 50000 from salary per month, 10000 annual bonus.'

var income = saler.match(/(\d+)/);
console.log(income[1]*12+10000);
