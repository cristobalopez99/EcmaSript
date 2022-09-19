const obj = {
    name: 'Cristobal',
    edad: 23,
    country: 'Col'
};

let { name, ...all} = obj;
console.log(name, all);

const obj1 = {
    ...obj,
    gusto: 'Futbol',

}
console.log(obj1);


const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? resolve ('Hello World')
        : reject(new Error('Test Error'))
    });
};

helloWorld()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(() => console.log('Finalizo'))


