// 1. Print odd numbers in an array

let numberArray = [1, 2, 3, 4, 5, 6,7,8,9];

let odd1=numberArray.filter((x) => {

return x % 2 !== 0;
});
console.log(odd1);

// 2. Convert all the strings to title caps in a string array

let str2 = ["vicky", "is", "a", "developer"];

 let strCaps = str2.map((item) => {

    return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();

});
console.log( strCaps.join(' '));


// 3. Sum of all numbers in an array

var arr=[1,2,3,4,5,6];
const add1=arr.reduce((a,b)=>a+b);
console.log([add1]);

// 4. Return all the prime numbers in an array

let prime1 = (arr) => {
    return arr.filter((n) => {
      for (let i = 2; i < n; i++) {
        if (n % i === 0) {
          return false;
        }
      }
      return n > 1;
    });
  };
  console.log(prime1([1,2,3,4,5,6,7,8,9,10]));

// 5. Return all the palindromes in an array

var arr =["abc", "mom", "dad", "madam", "teacher"];
arr = arr.filter((s) =>{
let len = s.length;
for (var i = 0; i<len / 2; i++) {
if (s[i] == s[len - i - 1]){
return true;
}
else{
return false;
}
}
});
console.log(arr);