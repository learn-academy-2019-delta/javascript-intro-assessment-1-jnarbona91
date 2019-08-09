// ASSESSMENT 1: INTRO TO JAVASCRIPT
// Coding practical questions

// ---------------------------------------------
// Consider this variable:

var mantra = "Be the dev"
var arr = mantra.charAt(0)

// 1a. Write the code that returns 'B' from mantra.
console.log(arr)
// 1b. Write the code that determines if there is an 'x' in mantra.
function let(arr){
    if(arr.includes("x")){
        return "true"
    }else{
        return "false"
    }
}
console.log(let(mantra))
// 1c. Write the code that determines if there is a 'v' in mantra.
function lett(arr){
    if(arr.includes("v")){
        return "true"
    }else{
        return "false"
    }
}

console.log(lett(mantra))
// 1d. Stretch: Write a function that can take any letter as an argument and returns if it exists within the given string.


// ---------------------------------------------------
// Consider the following variables:

var myDog = "Snoopy"
var myCat = "Garfield"

// 2a. Create a function that returns the longer of the two variables. Expected output: "Garfield"
function greater(str){
if(myDog.length > myCat.length){
    return myDog
}else{
    return myCat
}
}
console.log(greater())
// 2b. Create a function that takes in two arguments and returns an array containing the two variables. Expected output: ["Snoopy", "Garfield"]
var catDog = []
catDog.push(myDog, myCat)
console.log(catDog)
// 2c. Stretch: Write a function that returns the two variables in all lowercase letters.
function lower(str){
 return str.toLowerCase();
} 

console.log(lower(myCat))
// -----------------------------------------------
// Consider this variable:

var myMessage = "Learning is fun!"

// 3a. Write the code that logs each letter of the message using a for loop.
function letters(){
for (let i = 0; i < myMessage.length; i++)
    return myMessage.split('').join()
}
console.log(letters(myMessage))
// 4b. Stretch: Write the code that logs each letter of the message using a while loop.

// 4c. Super Stretch: Write the code that logs each letter of the message using forEach().


// ----------------------------------------------
// Consider the following variable:

var testString = "thisisateststring"

// 5a. Write a function that takes the variable as an argument and returns the string without vowels. Expected output: "thsstststrng"

function vowels(testString){
    let vowels = "aeiou"
    let arrV = []
    for(let i = 0; i < testString.length; i++){
        if(!vowels.includes(testString[i])){
            arrV.push(testString[i])
        }
    }
    return arrV.join('')
}

console.log(vowels(testString))
// 5b. Stretch: Update your function to return an error message if the variable is not a string. Copy and paste your function to add these changes.
// function error(testString){
//     for(let i = 0; i < testString.length; i++){
//         if(testString !== typeof("string")){
//              return "error"
//     }else{
//         return "is a string"
// }
// }
// console.log(error(testString))


// ----------------------------------------------
// Consider the following variable:

var toonimals = [ {name: "Itchy", animal: "mouse"}, 
                {name: "Stimpy", animal: "cat"}, 
                {name: "Daffy", animal: "duck"}, 
                {name: "Scratchy", animal: "cat"}, 
                {name: "Ren", animal: "dog"}, 
                {name: "Felix", animal: "cat"}]

// 6a. Write a function that takes in the toonimals array as an argument and returns an array with only the toon objects that are cats. Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]
function cats(cat){
    let arrC = []
    for (let i = 0; i < cat.length; i++){
    if(cat[i].animal === "cat"){
        arrC.push(cat[i])
    }
}   return arrC
}    
console.log(cats(toonimals))
//6b. Write a function that returns only the names of all the non-cats. Expected output: "Itchy" "Daffy" "Ren"

function others(animals){
    let arrN = []
    for (let i = 0; i < animals.length; i++){
        if(animals[i].animal !== "cat"){
            arrN.push(animals[i].name)
    }
}   return arrN
}
console.log(others(toonimals))


//6c. Stretch: Create a function that will print a sentence for every toon stating their name and their animal type. Use string interpolation. Expected output: "Itchy is a mouse" "Stimpy is a cat" "Daffy is a duck" "Scratchy is a cat" "Ren is a dog" "Felix is a cat"

