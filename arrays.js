/*
    In this file, we'll be continuing our story
    with Jon being allowed to flee his fight with Jamie.
*/ 
//Jon, embarrassed, intends to head back to Winterfell asap. First, let's create a backpack for him so he can begin to pack his bags. Create a variable called backpack, that is equal to an empty array.

let backpack = []

// now lets add 3 strings to the array, "sword," "shield" , "food"
backpack.push(`sword`, `shield`, `food`)

console.log(backpack)

//Realizing that his backpack is going to be too full to add other essentials, Jon decides to take his sword out and place it on his belt. Remove this sword from the backpack.

let belt = backpack.splice(0, 1)
// let belt2 = backpack.slice(0, 1)

// console.log(belt)
// console.log(belt2)
// console.log(backpack)
//Now Jon decides he wants to add his fur coat to his backpack. Create a variable called furCoat and give it a string value of "fur coat". Then add that variable to the backpack.
// console.log(backpack)

let furCoat = 'fur coat'

backpack.unshift(furCoat)
console.log(backpack)

//realizing it is freezing outside, jon decides to take the fur coat back out and put it on.without using splice, remove the fur coat from the array.

backpack.shift()


//let's check how much stuff we have in our backpack. create a variable called itemCount and set it equal to the number of items in the backpack

let itemCount = backpack.length

console.log(itemCount)

// console.log(backpack[0])

//There is currently no where near enough supplies to make the journey to Winterfell. Let's add some other essentials. Add the strings: flint, blanket, knife, and toothbrush.

backpack.push("flint", "blanket", "knife", "toothbrush")

console.log(backpack)
//Realizing his bag is overflowing, Jon decides to split up his content into two bags. Create a backpack2 variable that will hold some items. Use the splice method to move the flint, blanket, and knife from backpack to backpack2


// let backpack2 = backpack.splice(2,4)
// line 51 is the same as : 

let backpack2 = backpack.splice(backpack.length - 4, 4)
console.log(backpack2)

//Using bracket syntax, console.log the first item in backpack2

// console.log(backpack2[0])

//LOOPS

//Let's see the contents of Jon's backpacks. Use a for loop on each backpack to console.log each item

for (let i=0; i<backpack.length; i++) {
    console.log(backpack[i])
}
for (let i=0; i<backpack2.length; i++) {
    console.log(backpack2[i])
}

