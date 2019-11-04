/**
 * Loops and iteration
 */

//  for ( var i = 0; i < 10; i++){
//      console.log(i);
//  }

//  var Russ = ['Russ', 'thRapper', 1990, 'musician', false];

//  for (var i = 0; i<Russ.length; i++) {
//      console.log(Russ[i])
//  }


//  // WHile loop
//  var i =0;
//  while ( i < Russ.length){
//      console.log(Russ[i]);
//      i++;
//  }



 // continue and break statements;

 var Russ = ['Russ', 'thRapper', 1990, 'musician', false, 'blue'];

 for (var i = 0; i<Russ.length; i++) {
     if(typeof Russ[i] !== 'string') continue;
     console.log(Russ[i]);
 }

 for (var i = 0; i<Russ.length; i++) {
    if(typeof Russ[i] !== 'string') break;
    console.log(Russ[i]);
}



// Looping backwards

for( var i = Russ.length-1; i>=0; i--){
    console.log(Russ[i])
}