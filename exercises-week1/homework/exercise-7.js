/* Challenge Famous Writers
Did you know you can also have an array of objects? We've created one for you here. Loop through the array, 
and for each object, `console.log()` out the sentence:

"Hi, my name is {firstName} {lastName}. I am {age} years old, and work as a {occupation}."

Here is the array:

*/ 

var writers = [
  {
    firstName: "Virginia",
    lastName: "Woolf",
    occupation: "writer",
    age: 59,
    alive: false
  },
  {
    firstName: "Zadie",
    lastName: "Smith",
    occupation: "writer",
    age: 41,
    alive: true
  },
  {
    firstName: "Jane",
    lastName: "Austen",
    occupation: "writer",
    age: 41,
    alive: false
  },
  {
    firstName: "bell",
    lastName: "hooks",
    occupation: "writer",
    age: 64,
    alive: true
  },
];

/*
If you want an extra challenge, only `console.log()` the writers that are alive.
*/

// Loop through all the writers
for (var i = 0; i < writers.length; i++) {
  var writer = writers[i];
  // If writer.alive is true, get the print message and console.log() it
  if (writer.alive) {
    var writer = writers[i];
    var message = getPrintMessage(writer);
    console.log(message);
  }
}

function getPrintMessage(writer) {
  // The message is split in 3 lines so that the code is easier to read
  var message = "Hi, my name is " + writer.firstName + " ";
  message += writer.lastName + ". I am " + writer.age;
  message += " years old, and work as a " + writer.occupation + ".";
  return message;
}

console.log();

// NOTE: Another approach would be to use forEach like this:
writers.forEach(function(writer) {
  if (writer.alive) {
    var message = getPrintMessage(writer);
    console.log(message);
  }
});