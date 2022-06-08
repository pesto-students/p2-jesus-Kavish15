
const fib = {
    [Symbol.iterator](){
        let num2 = 1;
        let num1 = 0;
        let sum = 0;
        return {
            next() {
                [sum,num1,num2] = [num1,num2,num1+num2];
                return {
                    value:sum
                }
            }
        }
    }
}


for(const i of fib){
    if(i>10) break;
    console.log(i);
 }

