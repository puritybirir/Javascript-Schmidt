/** 
 * The ternary operator
 */

 var firstName = 'Hugh';
 var age = 16;

 age > 18? console.log(firstName + ' can drink alcohol'): console.log(firstName + ' is a minor')

 /**
  * Switch statement
  */

  var job = "Journalist";
  switch(job) {
      case 'teacher':
        console.log (firstName + ' teaches people how to code')
        break;
      case 'driver':
        console.log (firstName + ' drives an uber in Kampala')
        break;
      default:
        console.log(firstName + ' does something else')
  }