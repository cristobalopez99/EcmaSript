function newFunction(name, age, country) {
    var name = name || 'Cristobal';
    var age = age || 23;
    var country = country || 'Col';
    console.log(name, age, country);
}

// es6 

function newFunction2(name = 'Cristobal', age = 23, country = 'Col') {
    console.log(name, age, country);
}

newFunction2();
newFunction2('Esteban', '25', 'Br');

// Template Literal

let hello = "Hello Fucking";
let world = "world";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

let lorem = "Esta frase se escribió para un ejercicio \n"
+ "y continua con esta linea de una forma poco ortodoxa."

// es6

let lorem2 = `Esta frase la escribimos con Es6
y necesitamos que se vea asi, un poco mas facil
`;

console.log(lorem);
console.log(lorem2);


let person = {
    'name': 'Cristobal',
    'age' : 23,
    'country' : 'Col'
}
console.log(person.name, person.age);

//Es6

let {name, age, country} = person;
console.log(name, age, country);


let team1 = ['Real M', 'Barsa', 'Bayern', 'Inter'];
let team2 = ['Atleti', 'Sevilla', 'Real Betis', 'Milan'];

let groupA = ['PSG', ...team1, ...team2];
console.log(groupA);


// Arrows functions

const names = [
    {name: 'Cristobal', age: 23},
    {name: 'Erica', age: 25}
]

let listOfNames = names.map(item => console.log(item.name));


//promesas 

const helloPromise = () => {
    return new Promise((resolve, reject) =>{
        if (true) {
            resolve('Hey!');
        } else {
            reject('Ups!!');
        }
    });
}

helloPromise()
.then(response => console.log(response));


//clases modulos y generadores

class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(4, 8));




