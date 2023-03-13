//function createInstructor(firstName, lastName){
  //return {
    //firstName: firstName,
    //lastName: lastName
 // }
//}

// Write an ES2015 version

let createInstructor (firstName,lastName){
   return{
 firstName,
lastName
}
}

//var favoriteNumber = 42;

//var instructor = {
//  firstName: "Colt"
//}

//instructor[favoriteNumber] = "That is my favorite!"

//Computed Property Names
let favNum = 42;
const instructor = {
    firstName : "Colt",
    [favNum]:"That is my favorite!"
}

//var instructor = {
 //   firstName: "Colt",
  //  sayHi: function(){
  //    return "Hi!";
 //   },
 //   sayBye: function(){
 //     return this.firstName + " says bye!";
 //   }
 // }
  
 //Object Methods
const instructor = {
    firstName: "Colt",
    sayHi(){
        return "Hi!";
    },
    sayByn(){
        return.this.firstName + "says bye!";
    }
}

//createAnimal function

function createAnimal(species, verb, noise){
  return {
    species,
    [verb](){
      return noise;
    }
  }
}