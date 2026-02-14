let a = 10;

for (let i = 0; i < a; i++) {
    console.log(i);
    
}

let obj = {
    name : "Niloy",
    salary: 70000,
    role: "Developer"
}

for(const key in obj)
{
    console.log(key, obj[key]);
}

for(const c of "Niloy")
{
    console.log(c);
    
}

let i = 0;
while (i<6) {
    console.log(i)
    i++;
}


let j = 10;
do {
    console.log(j)
    j++;
} while (j<6);