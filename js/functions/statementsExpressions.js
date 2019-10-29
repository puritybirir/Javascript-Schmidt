/**
 * Fucntion statements and expressions
 */

 //function declarion ( do not)

 function functionDeclaration (hey, hello) {

 }


 // function expression (always produce a value)
 var whatDoYouDo = function(job, firstName){
     switch(job){
        case 'teacher':
            return firstName + ' teaches kids how to code'
        case 'driver':
            return firstName + ' drives a car'
        case 'designer':
            return firstName + ' designs website'
        default:
            return firstName + ' does something else'
     }
 }

 console.log(whatDoYouDo('teacher', 'Hugh'))
 console.log(whatDoYouDo('designer', 'Immaculate'))