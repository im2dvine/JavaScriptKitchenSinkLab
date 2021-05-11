/*var myName = 'Daesy'*/
//#4 variable containing name as a value.
/*use let instead of var*/
let myName = "Daesy";


const numOfStates = 50;
//#5 constant containing number of states in the U.S as a value.


/*var sum = 5 + 4*/
//#6 variable containing result of adding 5 and 4.
/*result may be a better name for the variable*/
let result = 5 + 4;



function sayHello() {
    alert("Hello World!");
}

sayHello();
//#8 function called sayHello displaying an alert that says Hello World!
//displays alert in the console!



function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
    /*console.log(name, age);*/ //to print in the console the names and ages..this would go here!
}

checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);
//#9 function called checkAge that takes two arguements(name, age)!
//displays alert for James and John bc TRUE for under 21



let myFavoriteVegetables = ["Avocado", "Peppers", "Mushrooms", "Pickles", "Broccoli", "Spinach"];

for (let i = 0; i < myFavoriteVegetables.length; i++) {
    console.log(myFavoriteVegetables[i]);
}
//#10 variable Array of favorite vegetables!
//used loop to display each favorite vegetable in the console!



let pet = {
    name: "Bruno",
    breed: "Cat"
};

console.log(pet.name, pet.breed);
//#11 object named pet with two properties {name: , breed:}!
//displays Bruno Cat to the console!
/*dot notation used for object! */


let humans = [
    { 
        name: "Daze",
        age: 29
    },
    {
        name: "Rico",
        age: 25
    },
    { 
        name: "Kayla",
        age: 29
    },
    {
        name: "Javi",
        age: 20
    },
    {
        name: "Yari",
        age: 20
    }
];

for (let i = 0; i < humans.length; i++) {
    checkAge(humans[i].name, humans[i].age);
}
//#12 an array called humans of 5 objects with properties {name:, age:}!
//Used loop to call checkAge() for each {} in the [], passing the {}'s name and age as arguements.
//displays alerts for Javi and Yari in console bc under 21!



function getLength(str) {
    return str.length;
}

/* getLength("Hello World") 

let numberResult = console.log(getLength("Hello World"));

if (numberResult % 2 === 0) {
    console.log("The world is nice and even!");
} else (numberResult % 2 === 1); {
    console.log("The world is an odd place!");
}; */
//#14 function called getLength that takes any word as an argument and returns the number of characters in the string!
//called the getLength(), passing 'Hello World' as argument!
//stored the returned result of the function in a variable.
//created an if else stmt to display string stmt depending on result boolean value!

let numberResult = getLength("Hello World");
if(numberResult % 2 == 0) {
    console.log("The world is nice and even!")
} else {
    console.log("The world is an odd place!")
};