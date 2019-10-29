/**
 * Functions. Very important for the DRY principle
 */

 function calculateAge (birthYear) {
     return 2019 - birthYear;
 }

 var ageHugh = calculateAge(1996);
 var ageMaurine = calculateAge(1990);

 console.log(ageHugh)
 console.log(ageMaurine)


 function calculateYearTillRetirement(year, firstName){
     var age = calculateAge(year)
     var retirement = 65- age;

     if( retirement> 0){
        console.log(firstName + ' retires in ' + retirement + ' years')
     } else {
        console.log(firstName + ' retires is already retired')
     }
     
 }

 calculateYearTillRetirement(1990, 'Maurine')