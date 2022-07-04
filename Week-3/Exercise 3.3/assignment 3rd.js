function createIncrement() {
  let count = 0;
  function increment() {
    count++;
    
  }
  let message = `Count is ${count}`;

  function log() {
    console.log(message);
  }
  return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log(); 

//Output => Count is Zero
//Explanation=> as When Log Function Get Run , it see for message variable
//and message Variable of parent has already have Const Value .ie. Count 0 
