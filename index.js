// Instruction #1 solution
const username = "alice123"
// Instruction #2 solution
const password = "flatironschool"
// Instruction #3 solution... reminders 
// let allows you to declare a variable without defining it and undefined is effectively falsey
let isAuthorized 
if(username === "alice123" && password === "flatironschool") {
    isAuthorized = true
}
else {isAuthorized = false}

// Instruction #4 solution
const loginValidationPhrase = isAuthorized === true ? "Welcome " + username + "!" : "Invalid username or password!"

// Instruction #5 solution
const randomNumber = Number.parseInt(Math.random()*10) + 1
//Incremental solution... const randomNumber = math.floor(Math.random()*10) +1

// Instruction #6 solution
const luckyNumberPhrase = `Your lucky number is ${randomNumber}!`