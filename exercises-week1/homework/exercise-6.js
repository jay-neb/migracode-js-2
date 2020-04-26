/*

Objects very often contain other objects.

This exercise will give you practice in getting the keys of objects inside other objects.

Use the provided console.log statements below and follow the instructions above them.

*/

var storeBranches = {

  glasgow: {
    manager: 'Andrew',
    assistant: 'Laura',
    interns: {
      head_intern: 'Mozafar',
      intern: 'James'
    }
  },

  edinburgh: {
    director: 'Kelly',
    manager: 'Sally',
    assistant: 'Derek',
    interns: {
      head_intern: 'John',
      intern: 'Sarah'
    }
  }
}


// ONLY EDIT BELOW THIS LINE

// # 1
// prints [ 'glasgow', 'edinburgh' ]
var cityKeys = Object.keys(storeBranches);
console.log(cityKeys);

// # 2
// prints [ 'manager', 'assistant', 'interns' ]
var positions = storeBranches.glasgow;
var positionKeys = Object.keys(positions);
console.log(positionKeys);

// # 3
// prints [ 'head_intern', 'intern' ]
var positions = storeBranches.glasgow;
var internPositions = positions.interns;
var internPositionKeys = Object.keys(internPositions);
console.log(internPositionKeys);

// ONLY EDIT ABOVE THIS LINE
