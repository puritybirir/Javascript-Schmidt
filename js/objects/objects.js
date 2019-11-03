/*
 Objects and properties
 */

 var john = {
     firstName: 'John',
     lastName: 'Smith',
     birthYear: 1997,
     birthYear: 1990,
     family:['Jane', 'Mark', 'Bob', 'Emily'],
     job: 'teacher',
     isMarried: false
 }

 console.log(john.firstName)
 console.log(john['lastName'])
 var x = 'birthYear';
 console.log(john[x]);

 john.job = 'Software developer';
 console.log(john)

 var Ashley = new Object();
 Ashley.firstName = 'Ashley'
 Ashley.birthYear = 1996;

 console.log(Ashley)