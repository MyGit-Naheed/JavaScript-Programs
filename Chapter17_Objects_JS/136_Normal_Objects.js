const user = {
    name: "John",
    agge:30,
    email:"john@example.com"
};


console.log(user);

//Accesing properties
console.log(user.name);
console.log(user["age"]);

//Adding/Modifying properties
user.city="NYC";
user.age = 31;

console.log(user);