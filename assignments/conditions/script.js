var a = 5;
var b = 6;

if(a>b){
    console.log("a is greater then b")
}else(
    console.log("b is greater then a")
)

console.log();
var c = 9;
if (c%2==0){
    console.log('it is a enen number', c);
}else{
    console.log('It is a odd nunber', c);
}

// var userInput = prompt("Please enter your Age: ");
// if (userInput>=18) {
//      console.log('You are old enough to drive');
// } else {
//     let a = 18-userInput;
//     console.log("You are left with", a ,"years to drive.");
// }


console.log();
var num = [2,4,7]


if (num[0]>num[1] && num[0]>num[2]) {
    console.log('largest of three numbers.',num[0]);
} else if(num[1]>num[2]){
    console.log('largest of three numbers.',num[1]);
}else{
    console.log('largest of three numbers.',num[2]);
}

console.log();

// var day = prompt('Enter the day: ')
// switch (day) {
//     case "Monday":
//         console.log('Working Day');
//         break;

//     case 'Tuesday':
//         console.log('Working Day');
//             break;
    
//     case 'Wednesday':
//         console.log('Working Day');
//         break;

//     case 'Thursday':
//         console.log('Working Day');
//         break;
    
//     case 'Friday':
//         console.log('Working Day');
//         break;
    
//     case 'Saturday':
//         console.log('Weekend Day');
//         break;
    
//     case 'Sunday':
//         console.log('Weekend Day');
//         break;

//     default: console.log('wrong input');
//         break;
// }

//////////////////////////////////////////////////////////////////////////////
 
console.log();

function permitions(userRole, action) {

    var roles ={
        admin:[ "create", "read" ,"update", "delete"],
        user:[  "read" ,"update"],
        guest:[ "read"]  }


    if (roles.hasOwnProperty(userRole)) {

        if (roles[userRole].includes(action)) {
            return "Permission granted.";
        } else {
            return "Permission denied.";
        }
    } else {
        return "Invalid user role.";
    }
}

console.log(permitions('admin','delete'));


console.log();


function calculateDiscountedPrice(price) {
    if (price >= 50) {
      price *= 0.9;
    }
    return "Final price: $" + price
  }

  console.log(calculateDiscountedPrice(100));
