const userId = 123432
let userEmail = "info@encode.pdeu"
var userPassword = "encode@123"
let userCity = "Gandhinagar"

// userId = 2 // not allowed


userEmail = "hc@hc.com"
userPassword = "21212121"
userCity = "Bengaluru"

// console.log(userId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(userId, userEmail, userPassword, userCity)
console.table([userId, userEmail, userPassword, userCity])

console.log(typeof userEmail);