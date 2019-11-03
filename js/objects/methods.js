/**
 * Objects and methods
 */

 var john = {
     firstName: 'John',
     lastName: 'Smith',
     birthYear: 1994,
     family: ['Jane', 'Mark', 'Bob', 'Emily'],
     job:'teacher',
     isMarried:false,
     calcAge: function(){
         this.age = 2019 - this.birthYear
     }
 }

 john.calcAge()

 console.log(john)