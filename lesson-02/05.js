let passport = {
    name: "Petr",
    surname: "Petrov",
};

let passport = Object.assign({}, passport);
passport1.name = "Ivan";

console.log(passport);
console.log(passport1);
