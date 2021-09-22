//1.Array Slice
const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
const modifiedFood = foods.slice(1,4);
console.log(modifiedFood);

//2.Array Splice
const foods1 = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
const modifiedFood1=foods1.splice(2,0,"noodles", "icecream");
console.log(foods1);

//3.Filter
const numberArray = [12,324,213,4,2,3,45,4234];
let isEven = numberArray.filter(function(num){
    return num % 2==0;
});
console.log(isEven);

//prime
let isPrimes=numberArray.filter(function(num){ 
 for (var i=2;i<=Math.sqrt(num);i++)
    {
     if(num % i==0)
      return false;
    }
      return true; 
   });
 console.log(isPrimes);

//4.Reject nonprime
let nonPrime=numberArray.filter(function(num){ 
    for (var i=2;i<=Math.sqrt(num);i++)
       {
        if(num % i==0)
         return true;
       }
         return false; 
      });
    console.log(nonPrime);

//5.Lambda
let isEven1=(numberArray)=>{
    return numberArray.filter(num => (num % 2) ==0);  
}
console.log(isEven);

//6.Map
const myArray = [11, 34, 20, 5, 53, 16];
let findSquareOfNumbers=(myArray)=>{
    return myArray.map(num =>(num*num));   
}
console.log(findSquareOfNumbers(myArray));

//7.Reduce
const myArray1 = [2, 3, 5, 10];
let multiply=(myArray1)=>{
    return myArray1.reduce((p,q) => (p*q));
}
console.log(multiply(myArray1));