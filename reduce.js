// function balancedParans(param) {
//     return !param.split("").reduce(function (prev, char) {
//         if (prev < 0) {return prev};
//         if (char === '(') {return ++prev};
//         if (char === ')') {return --prev};
//         return prev;
//     }, 0);
// }

// console.log(balancedParans(')('));

//Use the 'reduce' helper to find the sum of all the distances traveled.  Assign the result to the variable 'totalDistance'
// let trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

// let totalDistance = trips.reduce((prev, trip) => {
//        return prev + trip.distance;
// }, 0);

// console.log(totalDistance);
 
 // Use the 'reduce' helper to create an object that tallies the number of sitting and standing desks.  
 // The object returned should have the form '{ sitting: 3, standing: 2 }'.  The initial value has been provided to you.
 // Hint: Don't forget to return the accumulator object (the first argument to the iterator function)
   
//  var desks = [
//   { type: 'sitting' },
//   { type: 'standing' },
//   { type: 'sitting' },
//   { type: 'sitting' },
//   { type: 'standing' }
// ];

// var deskTypes = desks.reduce(function(prevObj, desk) {
//     if (desk.type === 'sitting') { ++prevObj.sitting;}
//     if (desk.type === 'standing') { ++prevObj.standing;}
//     return prevObj;
// }, { sitting: 0, standing: 0 });
//  console.log(deskTypes);


// Return array values:

// let trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

// let totalDistance = trips.reduce((prev, trip) => {
//         prev.push(trip.distance);
//         return prev;
// }, []);
// console.log(totalDistance);


/*Another really hard one!  Write a function called 'unique' that will remove all the duplicate values from an array.
For example, given the following array:
var numbers = [1, 1, 2, 3, 4, 4];
Your function should return
[1, 2, 3, 4]
Hint: Use the 'reduce' and 'find' helpers.  
*/

// function unique(array) {
//     return array.reduce((uniqueElements, arrElement)=>{
//          let isElementPresent = uniqueElements.find((element) => {
//             return element === arrElement;
//          });
//          if (!isElementPresent) {uniqueElements.push(arrElement);}
//          return uniqueElements;
//     }, []);
// }

// let numbers = [1, 1, 2, 3, 4, 4];
// console.log(unique(numbers));