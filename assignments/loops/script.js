console.log("even numbers from 0 to 100");
for(var i=0;i<=100;i++){
    if(i%2==0) {
        console.log(i);
    }
}

console.log();
console.log("odd numbers from 0 to 100");
for(var i=0;i<=100;i++){
    if(i%2) {
        console.log(i);
    }
}

console.log();
console.log("sum numbers from 0 to 100");

var sum =0
for(var i=0;i<=100;i++){
 sum += i
}
console.log(sum);

console.log("sum of even numbers from 0 to 100");
var sum1 = 0
for(var i=0;i<=100;i++){
    if(i%2==0) {
        sum1 += i
       
    }
}
console.log(sum1);


console.log();
console.log("sum of odd numbers from 0 to 100");
var sum2 = 0
for(var i=0;i<=100;i++){
    if(i%2) {
        sum2 += i
        
    }
}
console.log(sum2);

var arrSum = [0,0]
console.log("sum of even numbers from 0 to 100 save in array");
var sum3 = 0
for(var i=0;i<=100;i++){
    if(i%2==0) {
        sum1 += i
       arrSum[0] += i 
       
    }
}
console.log(sum1);
console.log(arrSum);


console.log();
console.log("sum of odd numbers from 0 to 100 save in array" );
var sum2 = 0
for(var i=0;i<=100;i++){
    if(i%2) {
        sum2 += i
        arrSum[1] += i
    }
}
console.log(sum2);
console.log(arrSum);


console.log();
countries = ["ALBANIA","BOLIVIA","CANADA","DENMARK","ETHIOPIA","FINLAND","GERMANY","HUNGARY","IRELAND","JAPAN","KENYA"]

// var countrieslengths = []
// for(var i=0;i=countries.length;i++){
//     countrieslengths[i] = countries[i].length;
// }

// console.log(countrieslengths);

var coun = [];
for (var i=0;i<countries.length;i++) {
    coun[i] = countries[i].length;
};
console.log(coun);


var biggest = coun.reduce((p,c) => { return Math.max(p,c) })

console.log(countries[coun.indexOf(biggest)]);

var five = []
for(var i=0;i<countries.length;i++){
    if(countries[i].length==5){
        five.push(countries[i])
    }
}

console.log(five);

var revers=[]
for (var i = 0; i < countries.length; i++) {
     revers.unshift(countries[i]);
    
}
console.log(revers);












