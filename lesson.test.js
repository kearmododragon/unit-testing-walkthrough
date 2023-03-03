//Import our functions from main.js
const modules = require("./main")
//console.log(modules) = { isEven: [Function: isEven] }
const isEven = modules.isEven
const divide = modules.divide
const isPositive = modules.isPositive
// This is where all of our test cases belong.
// test case for "isEven"
test("It should return true when called with an even number", () => {
    expect(isEven(4 & 10 & 14)).toBe(true);
    expect(isEven(10)).toBe(true);
    
})
//test case for "divide"
test("It should return a number when called", () => {
    // if b is 0, the outcome will be infinity, however as that's considered a number it passes
    expect(typeof divide(4, 2)).toBe("number")
})

test("It should return true when passed a positive number", () => {
    expect(isPositive(3)).toBe(true);
    expect(isPositive(1)).toBe(true);
})

test("It should return false when passed a negative number", () =>{
    expect(isPositive(-3)).toBe(false);
})