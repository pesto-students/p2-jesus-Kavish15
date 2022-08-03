// function getNumber(){
//   return Math.floor(Math.random() *100);
// }

// const p = new CustomisedPromise(function(resolve,reject){
//   let randomNumber = getNumber();
//   if (randomNumber % 5 === 0) {
//     reject(randomNumber);
//   } else {
//     resolve(randomNumber);
//   }
// }).then(function(message){
//   console.log(message);
  
// }).catch(function(message){
//   console.log(message);
// });



const PENDING = 0;
const FULLFILLED = 1;
const REJECTED = 2;

function myCustomPromise(executor) {
  let state = PENDING;
  let value = null;
  let handlers = [];
  let catchers = [];

  function resolve(result) {
    if (state !== PENDING) {
      return;
    }
    state = FULLFILLED;
    value = result;

    handlers.forEach((handler) => handler(value));
  }
  function reject(err) {
    if (state !== PENDING) {
      return;
    }
    state = REJECTED;
    value = err;

    catchers.forEach((catcher) => catcher(value));
  }

  this.then = function (successCallback) {
    if (state === FULLFILLED) {
      successCallback(value);
    } else {
      handlers.push(successCallback);
    }
  };
  this.catch = function (failureCallback) {
    if (state === REJECTED) {
      failureCallback(value);
    }
    catchers.push(failureCallback);
  };

  executor(resolve, reject);
}

const getNumber = (res, rej) => {
  let randomNumber = Math.floor(Math.random() * 10);
  if (randomNumber % 5 === 0) {
    setTimeout(() => {
      res(`${randomNumber} is divisible by 5`);
    }, 1000);
  } else {
    setTimeout(() => {
      rej(`${randomNumber} is not divisible by 5`);
    }, 1000);
  }
};

let promiseValue = new myCustomPromise(getNumber);
promiseValue.then((value) => console.log("then log", value));
promiseValue.catch((error) => console.log("catch log", error));