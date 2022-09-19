// dynamic import

const button = document.getElementById("btn");

button.addEventListener('click', async function(){
    const module = await import('./file.js');
    module.hello();
});

const aBigNumber = 924114872651469948n;
const anotherBigNumber = BigInt(924114872651469948);

console.log(aBigNumber);
console.log(anotherBigNumber);


//promise all setup 

const promise1 = new Promise((resolve, reject) => reject('reject'));
const promise2 = new Promise((resolve, reject) => resolve('resolve'));
const promise3 = new Promise((resolve, reject) => resolve('resolve 1'));

Promise.allSettled([promise1, promise2, promise3])
.then(response => console.log(response));


//globalthis

console.log(window);
console.log(globalThis);


//null 

const foo = null ?? 'default string';
console.log(foo);


//optional chaining

const user = {};
console.log(user?.profile?.email);

if (user?.profile?.email){
    console.log('email') 
} else {
    console.log('fail');
}

