const string = 'Ahora la temporada de F1 esta casi acabando, max verstappen ha estado arrasando con todo y no ha dejado cabida a los demas corredores, max verstappen es sin duda uno de los mejores corredores que se han visto en la maxima categoria';
const replaceString = string.replace('max verstappen', 'Charles Leclerc');
console.log(replaceString);

const replaceString2 = string.replaceAll('max verstappen', 'Charles Leclerc');
console.log(replaceString2);


//metodos privados 

class Message {
    #show(val) {
        console.log(val);
    };
}

const message = new Message();
message.show('Hola!!!')


// promise any 

const promise1 = new Promise((resolve, reject) => reject('1'));
const promise2 = new Promise((resolve, reject) => resolve('2'));
const promise3 = new Promise((resolve, reject) => resolve('3'));

Promise.any([promise1, promise2, promise3])
 .then(response => console.log(response));



 // with ref

class anyClass {
    constructor(element) {
    this.ref = new weakRef(element)
} 

}


//

let isTrue = true;
let isFalse = false
console.log(isTrue ??= isFalse);


