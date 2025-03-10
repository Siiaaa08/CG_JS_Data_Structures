
const input=process.argv.slice(2);
let arr=[];
let number=parseInt(input[0]);
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) return false;
    }
    return true;
}

for(let i=2;i<number;i++){
    if(isPrime(i)){
       arr.push(i);
    }
}
console.log(arr);
