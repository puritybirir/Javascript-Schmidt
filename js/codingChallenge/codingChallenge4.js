var Chimamanda = {
    fullName:'Chimamanda Ngozi Adichie',
    lastName: 'Adichie',
    mass: 91,
    height:1.95,
    calculateBMI:function() {
        this.BMI = this.mass/ (this.height*this.height);
        return this.BMI;
    }
}


var Trevor = {
    fullName:'Trevor Noah',
    mass: 78,
    height:1.69,
    calculateBMI:function() {
        this.BMI = this.mass/ (this.height*this.height);
        return this.BMI;
    }
}

;
console.log(Trevor)

if (Chimamanda.calculateBMI() > Trevor.calculateBMI()){
    console.log(Chimamanda.fullName+ " has a higher BMI of "+Chimamanda.BMI)
} else if(Trevor.BMI>Chimamanda.BMI){
    console.log(Trevor.fullName+ " has a higher BMI of "+Trevor.BMI)
} else {
    console.log("They have the same BMI")
}
