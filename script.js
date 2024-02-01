"use strict"

// N1

let array2 = [14, 150, 'css', null, 'javascript', 25]; 

let newarray = array2.map((x) => {
    if (typeof x == "number") {
      return x * x;
     } else if (typeof x == "string") {
        return x.toUpperCase();
     }
    return x;
  });
  console.log(newarray);


  // N2

  let info = "good day"
  let item = info.slice (5);

   console.log(item);

   // N3

   function stringLength(letter) {
    return letter.length;
    }
  let length = stringLength("good day");
  console.log(length);

   // N4



// N5 
let fruits = ["apple", "mango", "avocado","kiwi"] ;  
fruits.splice(-2, 1, "strawberry");
console.log(fruits);

// N6 

let valuearray = [5, 25, 89, 120, 36]

valuearray.push("javascript", "python")
valuearray.unshift("html", "css")
console.log(valuearray);
valuearray.shift();
valuearray.pop()
console.log(valuearray);

// N7 

let fruit = ["orange", "banana", "kiwi"]

console.log(fruit.length);

fruit.push("apple", "pineapple")
fruit.unshift("watermelon")
console.log(fruit.length);
fruit.splice(2, 0, "mango");
console.log(fruit.length, fruit);
fruit.shift();
fruit.pop();
console.log(fruit);
console.log(fruit.length, fruit);

// N8

let array3 = [1, 2, 3, 4, 5];

array3.splice(3, 0, "a", "b", "c");
console.log(array3);

// N9

let  array5 = [12, 25, 3, 6, 8, 14, 7, 23];

let newNambersArray = array5.map(function ( x ) {
    return x / 3;

})
console.log(newNambersArray);


// N10

let array7 =  [15, 100, 25, 10, 36]

array7.splice( 3, 1)
console.log(array7);

// N11

let array8 = [1, 2, 3 , 4 , 5]

array8.splice(2, 1, "three")

console.log(array8)

// N12

let array1 =["hello1", 14,24, "hello2"]

let newarry1 = array1.filter (function(num){
return typeof num === "number"
}
)
console.log(newarry1);

// N13

let array4 = [1, 2, 3, 4, 5];
let sum = 0;
array4.forEach ((item) =>{
    sum += item
})
console.log(sum)


// array4.forEach(function(item) {
// sum += item
// })
// console.log(sum);

// N14

let languages = ["html", "css", "javascript", "python", "php"];

let newLanguages = languages.filter (function (item){
    return item.length > 3;
})

console.log(newLanguages);

// N14

let words = ['Madrid', 'rome', 'Milan', 'berlin']

let newWords = words.filter (function(item){
    if (item.includes ("M") || item.includes ("m"))
    return true;
})
console.log(newWords);
