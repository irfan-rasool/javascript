/*
* What does a function contains:
* A function has many properties:
* 1. Function name (optional)
* 2. code property which is invokable,
* 3. All functions get access to special methods/functions on there own. Because functions are objects
*   So, they have there own methods among them are:
*   bind()/call()/apply()
* 4. execution environment
*
* ##############################
* To demonstrate the usage of call()/apply()/bind() I will give u example of
* function borrowing and function currying
* function currying means creating a copy of a function with some preset parameters
* */

// var person = {
//     firstName : "Irfan",
//     lastName  : "Rasool",
//     getFullName : function () {
//         return this.firstName + " "+ this.lastName;
//     }
// };


// usage of bind:
// Bind only creates a copy and doesn't call the function.
/*
var logName  = function (arg1, arg2) {
    console.log(this.getFullName());
}.bind(person)

//var fullName = logName.bind(person);
logName();
fullName();*/


// usage of call()
// call() sets the params and calls the funtion at that time only example below:

/*var logName  = function (arg1, arg2) {
    console.log(arg1)
    console.log(arg2)
    console.log(this.getFullName());
};
logName.call(person, 2, 3);
    */

// usage of apply
// apply and call are same but only difference is how we pass parameter. Have a look
/*var logName  = function (arg1, arg2) {
 console.log(arg1);
 console.log(arg2);
 console.log(this.getFullName());
 };
 logName.apply(person, [2, 3]);
*/
// So demonstrating the above these concepts what exactly we can do further with these things:
// function borrowing:

// var person2 = {
//     firstName : "firstname2",
//     lastName : "firstname2",
// };
//
// ;
// console.log(person.getFullName.apply(person2));

// Function currying: function currying means creating a copy of a function with some preset parameters
function multiply(a,b) {
    return a*b;
}
var multipleByTwo  = multiply.bind(this, 2);
console.log(multipleByTwo(5));




