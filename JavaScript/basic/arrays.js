// Working with arrays


// forEach()
// this method calls a function for each element in an array.
// array.forEach(function(currentValue, index, arr), thisValue).

const fruits = ["kiwi", "apple", "pear"]
function appendIndex(fruits, index) {
    console.log(`${index}. ${fruits}`)
}

fruits.forEach(appendIndex)


// filter()
// this method creates a new array filled with elements that pass a test provided by a function.

const nums = [0, 10, 20, 30, 40, 50]
const temp_nums = nums.filter(function(num){
                    return num > 20
                })

console.log(temp_nums)


// map()
// this method creates a new array from calling a function for every array element.
const new_nums = nums.map(function(num) {
                    return num/ 10
                })

console.log(new_nums)



// Maps in javascript
let boxers = new Map()
boxers.set(1, "Ali")
boxers.set(2, "Tyson")
boxers.set(3, "Rocky")

console.log(boxers)
console.log(boxers.get(2))


// Sets in javascript
const color = ['red', 'green', 'red', 'blue']
let unique_color = new Set(color)
console.log(unique_color)
