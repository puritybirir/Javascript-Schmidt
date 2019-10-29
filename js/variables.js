var firstName = 'John';
console.log(firstName);

var lastName = 'Schmidt';
var age = 28;

//Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + 'year old ' + job + '. Is he married? ' + isMarried );

//Variable mutation

age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + 'year old ' + job + '. Is he married? ' + isMarried );

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);