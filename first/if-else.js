// Program to check if the number is positive

const number = ("Enter a number: ");

// check if number is greater than 0
if (number > 0) {
    // the body of the if statement
    console.log("positive number");
}

console.log("nice number");

let age = 19;

// if age is 18 or above, you are an adult
// otherwise, you are a minor

if (age >= 18) {
    console.log("You are an adult");
}
else {
    console.log("You are a minor");
}

// Output: You are a minor

let hour = 10;

if (hour >= 6 && hour < 12)
    console.log("Good Morning");
else if (hour >= 12 && hour < 18)
    console.log("Good Afternoon");
else 
    console.log("Good Evening");