function greet(name) {
    console.log("Welcome " + name);

}

greet("Alex");
greet("Niloy");


function sum(a, b, c = 3) {
    console.log("The sum of the numbers is: ", a + b + c);
}

sum(4, 5);

const function1 = (x) => {
    console.log("passed message to the arrow function: " + x);
}

function1("show");