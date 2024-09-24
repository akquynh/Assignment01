// Convert identifiers to Camel Case notation
let someMonth
function theMonth()
let currentMonth
let summerMonth
let myLibraryFunction

// Example of Numeric Literal Expression
let days = 7;

// Example of Literal Expression
let birthday = "Today is your birthday!";

// Example of Boolean Expresion 
let today = true; 

// Example of Null Literal Expression 
let month = null; 

// Example of Variable Expression - Area of a Triangle
let b = 25;
let h = 3;
let (b * h)/2;

// Example of Complex Expression - Calculate Sales Tax & Final Price
function calculateTax(price) {
    return (price * 0.0775)+ price; 
}
let totalPrice = 50.75;
let discount = calculateTax(totalPrice); 

// Declare & Assign Variables
let strFirstName;
let strLastName;
let strAddress;
let strCity = "San Diego";
let strState = "California";
let numZipCode = 92037;
let numYourAge;
let strReferralSource;
let boolMayWeContactYou;

// Create a number and string variable with coerced result 
let happyBirthday = "Happy Birthday! You are " + 18 + " years old today.";
console.log(happyBirthday);

// Create a boolean and string variable with coerced result 
let day = true + "today is Monday."
console.log(day);

// Create a boolean and number variable with coerced result
let thisMonth = 12 + false;
console.log(thisMonth);

// Fix code
let someString = "Who once said, 'Only two things are infinite, the universe and human stupidity, and I'm not sure about the former.'";
console.log(someString);

// Create null variable 
let nullVariable = null;
console.log(nullVariable);

// Create undefined variable 
let undefVariable;
console.log(undefVariable);

// Create literal string 
console.log(typeof "Good Afternoon");

// Create literal number
console.log(typeof 1998);  

// Create literal boolean
console.log(typeof true);  

// Create literal object
console.log(typeof null); 

// Create literal undefined
let someVariable;
console.log(typeof someVariable);

// Create alert
alert("Hello" + " Avery Q" + ", welcome to the JavaScript class!");


// Create name variable for previous alert
let name = "Avery Q";
alert("Hello" + " " + name + ", welcome to the JavaScript class!");

// Create course variable for previous alert
let course = "JavaScript";
alert("Hello" + " " + name + ", welcome to the " + course + " class!");

// Add in line break to previous alert
alert("Hello " + name + ".\nWelcome to the " + course + " class!");

// Create prompt for name
let enterName = prompt("Please enter your name:"); 
alert("Hello " + enterName + ".\nWelcome to the " + course + " class!");

// Create prompt for name
let enterCourse = prompt("Please enter the course you are taking:")
alert("Hello " + enterName + ".\nWelcome to the " + enterCourse + "class!")

// Create a sum 
let x = 10; 
let y = 20; 
console.log(x + y);

// Add 20 and assign to variable
let x = 20; 
x += 20;    
console.log(x); 

// Multiply 5 and assign to variable
let x = 20; 
x *= 5;     
console.log(x); 

// Divide and assign to variable
let x = 20 % 3; 
x /= 1;         
console.log(x); 

// Create a true logical application
let a = 10;   
let b = 20;   
let c = 15;  

let result = (a < b) && (b > c) || (c === 15);

console.log(result); 

// Create a false logical application
let x = 5;     
let y = 10;    
let z = 15;    

let result = (x > y) || (y <= z) && (z !== 15);

console.log(result); 