const student = {
    firstname: "Jeny",
    rollno: 18
};

console.log(student);

const cat = {
    name: "Kavaya",
}
console.log(cat.name);

const gog = {
    name: "Jeny",
}

console.log(gog["name"]);

const person = {
    name: "John",
    hobby: "Singing",
}

person.hobby = "Dancing";

console.log(person);

const employee = {
    name: "Tom",
    position: "officer",
    salary: 30000,
}

delete employee.salary

console.log(employee);

const dogs = {
     name: "Meth",

     bark: function () {
        console.log("Woofl");
     }
};

dogs.bark();

//Prototype Inheritance//

function Car(model, year) {
    this.model = model;
    this.year = year;
};

let c1 = new Car("Mustang", 1984);
let c2 = new Car("Corolla", 1986);

Car.prototype.drive = function() {
    console.log(`Driving ${this.model}`);
};

console.log(`${c1.model} color: ${c1.color}`);  
console.log(`${c2.model} color: ${c2.color}`);  

c1.drive();
c2.drive();