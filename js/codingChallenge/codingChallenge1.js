var heightMark, heightJohn, massJohn, massMark, JohnBMI, markBMI;

// Height in meters
heightMark = 1.3; 
heightJohn =  1.5;

// Mass in KG
massJohn = 40;
massMark = 15;

JohnBMI = massJohn/(heightJohn*2);
markBMI = massMark/(heightMark* 2);

var IsMarkBMIHigherThanJohn = markBMI>JohnBMI;

console.log("Is Mark's BMI higher than John's BMI? "+ IsMarkBMIHigherThanJohn)

