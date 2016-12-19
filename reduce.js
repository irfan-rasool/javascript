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
let trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance = trips.reduce((prev, trip) => {
       return prev + trip.distance;
}, 0);

console.log(totalDistance);