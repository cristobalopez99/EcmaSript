const data = {
    frontend: 'Cristo',
    backend: 'Ester',
    design: 'Elizabeth',
}

const entries = Object.entries(data);
console.log(entries);


const team = {
    frontend: 'Cristo',
    backend: 'Ester',
    design: 'Elizabeth',
}

const values = Object.values(team);
console.log(values);
console.log(values.length)


const string = 'Hello'; 


//async y await 

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('Test Error'))
    })
}

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
};

helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
};
anotherFunction();