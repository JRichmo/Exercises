//Object Destructuring 1

let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // ?
console.log(yearNeptuneDiscovered); // ?

//Answer
// numPlanets = 8
// yearNeptuneDiscovered = 1846

//Object Destructuring 2
let planetFacts = {
    numPlanets: 8,
   yearNeptuneDiscovered: 1846,
   yearMarsDiscovered: 1659
 };
  
 let {numPlanets, ...discoveryYears} = planetFacts;
  
 console.log(discoveryYears); // ?

 //Answer:
 //{yearNeptune Discovered : 1846, yearMarsDiscovered: 1659}

 //Object Destructuring 3 - What does the following code return/print

 function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
  }
  
  getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // ?
  getUserData({firstName: "Melissa"}) // ?
  getUserData({}) // ?

  //Answer
  // Your name is Alejandro and you like purple
  // Your name is Melissa and you like green
  //Your name is undefined and you like green

  //Array Destructuring 1 - What does the following code return/print?
  let [first, second, third] = ["Maya", "Marisa", "Chi"];

  console.log(first); // ?
  console.log(second); // ?
  console.log(third); // ?

  //Answer
//Maya, Marisa, Chi

//Array Destructuring 2 - What does the following code return/print?
let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
  ]
  
  console.log(raindrops); // ?
  console.log(whiskers); // ?
  console.log(aFewOfMyFavoriteThings); // ?

  //Answer
  //"Raindrops on Roses"
  //"Whiskers on Kittens"
  // ["Bright Copper Kettles", "Warm woolen mittens", "Brown paper packages tied up with strings"]

  //Array Destructuring 3 - What does the following code return/print?
  let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // ?

//Answer
//[10,30,20]

//ES2015 Refactoring - Assigning Variables to Object Properties
var obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
  var a = obj.numbers.a;
  var b = obj.numbers.b;

  //Answer
  const obj = {
    nums : {
        a:1,
        b:2
    }
  };
  const {a,b} = obj.nums;

  //ES5 Array Swap
  var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

//Answer
[arr[0],arr[1]] = [arr[1], arr[0]];

// raceResults() - Answer
raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre']);
const raceResults = ([first, second, third, ...rest]) =>  ({first,second, third, rest});

