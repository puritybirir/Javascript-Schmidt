/**
 * Operator precedence
 */


 var now = 2019;
 var yearBirir = 1996;
 var fullAge = 18;

 var isFullAge = now - yearBirir >= fullAge; // true
 console.log(isFullAge);

 var ageBirir = now - yearBirir;
 var ageMark = 35;
 var average = (ageBirir + ageMark)/2;

 console.log(average)

 //Multiple assignments

 var x, y;
 x = y = (3+5) * 4-6; // 8*4 -6 // 32-6 // 26

 console.log(x, y)