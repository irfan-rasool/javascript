/*
* This example will show you how to do functional programming
* below are the examples:
* */

var arr1 = [1, 2, 3];
var arr2 = [];
for (var i = 0; i < arr1.length; i++) {
    arr2.push(arr1[i]*2);
}
console.log(arr1);
console.log(arr2);

console.log('******************************************************************************************');
// now here come functional programing and see how it helps us:

function doSomeThing(arr, fn) {
    var newArr = [];
    for(var i = 0; i<arr.length; i++) {
        newArr.push(
            fn(arr[i])
        );
    }

    return newArr;
}

var arr3 = [1, 2, 3];
var outCome = doSomeThing(arr3, function (item) {
    return item * 2;
});

console.log(outCome);
console.log('******************************************************************************************');

var outCome = doSomeThing(arr3, function (item) {
    return item > 2;
});

console.log(outCome);
console.log('******************************************************************************************');

// now lets make it more dynamic.
// The hard code 2 which I am giving inside the passing function. Lets make it dynamic:

var fnParam = function (limiter, item) {
return item > limiter;
};
var outCome5 = doSomeThing(arr3, fnParam.bind(this, 2));
console.log(outCome5);
console.log('******************************************************************************************');

// lets make it more simplified so that we don't have to call bind
var fnSimplified = function (limiter) {
    return function (limiter, item) {
        return item > limiter;
    }.bind(this, limiter);
};
var outCome6 = doSomeThing(arr3, fnSimplified(2));
console.log(outCome6);
console.log('******************************************************************************************');