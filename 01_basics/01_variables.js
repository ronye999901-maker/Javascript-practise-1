const accountId = 144553 
let accountEmail = "s7901571@gmail.com"
var accountPassword = "12345"
accountCity = "Kolkata"

// accountId = 2 // not allowed as const cannot be changed
console.log(accountId);
var accountPassword = "12344"
accountCity = "Midnapore" // possible without declear that kind of variable 

// Scope = {} 
/*
not to use var
*/
console.log(accountPassword);
console.log(accountCity);
console.log();

console.table([accountId,accountEmail,accountPassword,accountCity]);

let accountState;
console.log(accountState); // answer will be undefined 
