function good(name) {
    console.log(`Hello ${name}`);
}

good("Sati");

good("Dev");

function addNumbers(num1, num2) {
    let sum = num1 + num2;
    console.log(`Sum: ${sum}`);
}

addNumbers(8, 6);

function findSquare(num) {
    return num * num;   
}

let square = findSquare(6);

console.log(`Square: ${square}`);

let band = "variable to uppercase, resulting in";
let bandUpper = band.toUpperCase();
console.log(`Favorite Band: ${bandUpper}`);

let squared = function(num) {
    return num * num;
}

console.log(squared(50));

function counter(count) {

   
    console.log(count);

    
    if(count > 1) {

       
        count = count - 1;

     
        counter(count);
    } else {

    
        return;
    };
};


counter(5);