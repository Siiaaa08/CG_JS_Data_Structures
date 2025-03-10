
const input=process.argv.slice(2);
let arr=[];
let number=parseInt(input[0]);
if(number>=0&&number<101){
for(let i=2;i<number;i++){
    if(i%11==0){
       arr.push(i);
    }
}
console.log(arr);}
else{
    console.log("please enter valid number between 0 to 100");
}
