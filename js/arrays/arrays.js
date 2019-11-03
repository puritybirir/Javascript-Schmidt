/**
 * Arrays
 */


 //Initialize Array
 var names = ['John', 'Mark', 'Jane'];
 var years = new Array(1990, 1969, 1948);

console.log(names);
console.log(names.length);

// Mutate Array
names [1] = 'Ben';
names [5] = 'Mary'
console.log(names);

//Different data types
var john = ['John', 'Smith', 1990, 'teacher', false]

john.push('blue');
john.unshift('Mr.')

console.log(john)


john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(1990));

var isJohnDesigner = john.indexOf('designer') === -1? 'John is not a designer' : 'John is a designer';

console.log(isJohnDesigner)