


// question no 01

// Suppose You have an array of object
// var itemsArray = [
    // {name:”juice”,price:”50”, quantity:”3”},
    // {name:”cookie”,price:”30”, quantity:”9”},
    // {name:”shirt”,price:”880”, quantity:”1”},
    // {name:”pen”,price:”100”, quantity:”2”}];
    // Calculate total price of each item and all items;





var itemsArray = [
    {name: "juice", price: "50", quantity: "3"},
    {name: "cookie", price: "30", quantity: "9"},
    {name: "shirt", price: "880", quantity: "1"},
    {name: "pen", price: "100", quantity: "2"}
];

var totalAllItems = 0;

for (var i = 0; i < itemsArray.length; i++) {

    var totalPriceItem = parseInt(itemsArray[i].price) * parseInt(itemsArray[i].quantity);

    console.log(itemsArray[i].name + " total price: " + totalPriceItem);

    totalAllItems += totalPriceItem;
}

console.log("Total price of all items: " + totalAllItems);



// question no 02 

// Create an object with properties name, email, password, age,
// gender, city, country.
// Check if age and country properties exist in object or not.
// Also check firstName and lastName properties in object.

var object = {
    name : 'khan',
    email : 'khan@gmail.com',
    password : 123456,
    age : 16,
    gender : 'male',
    city : 'karachi',
    country : 'Pakistan'
}


if ("age" in object) {
    console.log("The 'age' property exists.");
} else {
    console.log("The 'age' property does not exist.");
}

if ("country" in object) {
    console.log("The 'country' property exists.");
} else {
    console.log("The 'country' property does not exist.");
}

if ("firstName" in object) {
    console.log("The 'firstName' property exists.");
} else {
    console.log("The 'firstName' property does not exist.");
}

if ("lastName" in object) {
    console.log("The 'lastName' property exists.");
} else {
    console.log("The 'lastName' property does not exist.");
}



// question no 03]

// Create a constructor function with some properties. Now
// create multiple records using the constructor.






function Person(name, email, age, gender, city, country) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.gender = gender;
    this.city = city;
    this.country = country;
}


var person1 = new Person("Raees" , "awan@gmail.com" , "16" , "male" , "karachi" , "Pakistan")
var person2 = new Person("Ali" , "AliKhan@gmail.com" , "12" , "male" , "islamabad" , "Pakistan")
var person3 = new Person("Maria" , "mariamughal@gmail.com" , "20" , "female" , "lahore" , "Pakistan")


console.log(person1);
console.log(person2);
console.log(person3);





// question no 04

// Suppose you want to check population of your area, their
// educations and professions.
// Create a constructor function which holds following
// properties:
// Name, gender, address, education, profession,
// Enter all records one by one.
// Hint:

//  use select box for education and profession,
//  use radio box for gender


function New_Person(name, gender, address, education, profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
}





var people = [];

function addPerson() {
    var name = document.getElementById("name").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var address = document.getElementById("address").value;
    var education = document.getElementById("education").value;
    var profession = document.getElementById("profession").value;

    var person = new New_Person(name, gender, address, education, profession);
    people.push(person);

    console.log("Person added:", person);
    console.log("All People:", people);
}
