//console.log(this);

calculateAge(1996)
function calculateAge(year){
    console.log(2020-year);
    // Window object
    console.log(this);
}

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        // object
        console.log(this);
        console.log(2020-this.yearOfBirth);

        // function innerFunction() {
        //     // Window object
        //     console.log(this);
        // }
        // innerFunction();
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
}

mike.calculateAge= john.calculateAge;
mike.calculateAge();