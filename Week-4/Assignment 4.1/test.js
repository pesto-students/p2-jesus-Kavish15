function getNumber(){
  return Math.floor(Math.random() *100);
}

const p = new CustomisedPromise(function(resolve,reject){
  let randomNumber = getNumber();
  if (randomNumber % 5 === 0) {
    reject(randomNumber);
  } else {
    resolve(randomNumber);
  }
}).then(function(message){
  console.log(message);
  
}).catch(function(message){
  console.log(message);
});