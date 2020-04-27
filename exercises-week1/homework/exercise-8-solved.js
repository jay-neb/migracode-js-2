/*
  Challenge Mentors

  Given the array of mentor of objects, follow each part of the exercise below
 */

var mentors = [
  {
    firstName: "Antonio",
    lastName: "Miranda",
    skills: ["JS","React","Node"],
    class: "Mar1",
    studentLikes: 0,
    job: {
        company: "Google",
        position: "Senior developer",
        city: "Barcelona"
    }
  },
  {
    firstName: "Leo",
    lastName: "Messi",
    skills: ["Play football"],
    class: "Mar3",
    studentLikes: 0,
    job: {
        company: "FC Barcelona",
        position: "Player",
        city: "Barcelona"
    }
  },
  {
    firstName: "John",
    lastName: "VanDamme",
    skills: ["React","Angular","Python","Node"],
    class: "Mar4",
    studentLikes: 0,
    job: {
        company: "Facebook",
        position: "Software Manager",
        city: "Chicago"
    }
  },  
  {
    firstName: "Giorgio",
    lastName: "Polvara",
    skills: ["HTML","JS","React"],
    class: "Mar2",
    studentLikes: 0,
    job: {
        company: "Amazon",
        position: "Senior developer",
        city: "Barcelona"
    }
  },
];

/*
  DO NOT EDIT ANYTHING ABOVE THIS LINE

  WRITE YOUR CODE BELOW
*/

/*
1. Loop through the array, and for each object, `console.log()` out the sentence only for
mentors that are in Barcelona and one of the skills is React
"Hi, my name is {firstName} {lastName}. I work in Barcelona and i know React."
*/

// DO NOT EDIT THIS CODE
console.log("Part 1");
console.log("Expected result:");
console.log("Hi, my name is Antonio Miranda. I work in Barcelona and I know React.");
console.log("Hi, my name is Giorgio Polvara. I work in Barcelona and I know React.");
console.log("Actual result:");
//

// WRITE YOUR CODE HERE
// Solution
for (var i = 0; i < mentors.length; i++) {
  var mentor = mentors[i];
  if (mentor.job.city === "Barcelona" && mentor.skills.includes("React")) {
    var sentence = "Hi, my name is " + mentor.firstName + " ";
    sentence += mentor.lastName + ". I work in Barcelona and I know React.";
    console.log(sentence);
  }
}
//

// DO NOT EDIT THIS CODE
console.log();
//

/*
2. To those that work in Barcelona, set "Jun1" in the class attribute, 
and add a new skill to the list "SQL".
To add elements in an array you can use .push(), for example:
var animals = ["dog","cat"];
animals.push("horse"); //["dog","cat","horse"]
*/

// WRITE YOUR CODE HERE
// Solution
for (var i = 0; i < mentors.length; i++) {
  var mentor = mentors[i];
  if (mentor.job.city === "Barcelona") {
    mentor.class = "Jun1";
    mentor.skills.push("SQL");
  }
}
//

// DO NOT EDIT THIS CODE
console.log("Part 2");
console.log("Expected result:\nJun1 SQL\nJun1 SQL\nJun1 SQL");
console.log("Actual result:");
for (var i = 0; i < mentors.length; i++) {
  var mentor = mentors[i];
  if (mentor.job.city === "Barcelona") {
    console.log(mentor.class, mentor.skills[mentor.skills.length - 1]);
  }
}
console.log();
//

/*
3. Create an object method with the name .addSkill() to be able to add skills from it
*/

// WRITE YOUR CODE HERE
// Solution
for (var i = 0; i < mentors.length; i++) {
  var mentor = mentors[i];
  mentor.addSkill = function (skill) {
    this.skills.push(skill);
  };
}
//

// DO NOT EDIT THIS CODE
console.log("Part 3");
console.log("Expected result:\nHTML\nHTML\nHTML\nHTML");
console.log("Actual result:");
for (var i = 0; i < mentors.length; i++) {
  var mentor = mentors[i];
  mentor.addSkill("HTML");
  console.log(mentor.skills[mentor.skills.length - 1]);
}
console.log();
//

/*
4. Create a method to add a skill to all members in a list of mentors
*/

// WRITE YOUR CODE HERE
// Solution
function addSkill(mentors, skill) {
  for (var i = 0; i < mentors.length; i++) {
    var mentor = mentors[i];
    mentor.addSkill(skill);
  }
}
//

// DO NOT EDIT THIS CODE
console.log("Part 4");
console.log("Expected result:\nCSS\nCSS\nCSS\nCSS");
console.log("Actual result:");
addSkill(mentors, "CSS");
for (var i = 0; i < mentors.length; i++) {
  var mentor = mentors[i];
  console.log(mentor.skills[mentor.skills.length - 1]);
}
console.log();
//

/*
5. Create a method to remove a skill from all members in a list of mentors
*/

// WRITE YOUR CODE HERE
// Solution
// First loop through all the mentors to define a new object function called removeSkill
for (var i = 0; i < mentors.length; i++) {
  var mentor = mentors[i];
  mentor.removeSkill = function (skill) {
    // Get the index of the skill item in the skills array
    var index = this.skills.indexOf(skill);
    // If the index is not -1, remove the item from the array with the splice() function
    if (index > -1) {
      this.skills.splice(index, 1);
    }
  };
}
// Loop through all mentors and call the removeSkill object function
function removeSkill(mentors, skill) {
  for (var i = 0; i < mentors.length; i++) {
    var mentor = mentors[i];
    mentor.removeSkill(skill);
  }
}
//

// DO NOT EDIT THIS CODE
console.log("Part 5");
console.log("Expected result:\nHTML\nHTML\nHTML\nHTML");
console.log("Actual result:");
removeSkill(mentors, "CSS");
for (var i = 0; i < mentors.length; i++) {
  var mentor = mentors[i];
  console.log(mentor.skills[mentor.skills.length - 1]);
}
console.log();
//

/*
6. Create a function that returns the name of the mentor with the most number of skills
*/

// WRITE YOUR CODE HERE
// Solution
function getMentorNameWithMaxSkills(mentors) {
  // These two variables will store data about the mentor with the maximum skills
  var maxSkills = 0;
  // null is used for an object when it has no value, like using 0 for a number or "" for a string
  var maxSkillsMentor = null;
  // Loop through all the mentors
  for (var i = 0; i < mentors.length; i++) {
    var mentor = mentors[i];
    // If the mentor has more skills than the current value of maxSkills
    if (mentor.skills.length > maxSkills) {
      // Set this mentor's skills to be the maxSkills
      maxSkills = mentor.skills.length;
      // and set this mentor to be one with maximum skills
      maxSkillsMentor = mentor;
    }
  }
  return maxSkillsMentor.firstName;
}

// DO NOT EDIT THIS CODE
console.log("Part 6");
console.log("Expected result: Antonio");
var mentorName = getMentorNameWithMaxSkills(mentors);
console.log("Actual result: " + mentorName);
console.log();
//

/*
7. Create the method .addStudentLikes() that increments by one the attribute studentLikes
*/

// WRITE YOUR CODE HERE
// Solution
for (var i = 0; i < mentors.length; i++) {
  var mentor = mentors[i];
  mentor.addStudentLikes = function () {
    this.studentLikes += 1;
  };
}
//

// DO NOT EDIT THIS CODE
console.log("Part 7");
console.log("Expected result:");
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log("Actual result:");
for (var i = 0; i < mentors.length; i++) {
  var mentor = mentors[i];
  mentor.addStudentLikes();
  console.log(mentor.studentLikes);
}
console.log();
//

/*
8. Create a function that adds a student like to all mentors in the array
*/

// WRITE YOUR CODE HERE
// Solution
function addStudentLikes(mentors) {
  for (var i = 0; i < mentors.length; i++) {
    var mentor = mentors[i];
    mentor.addStudentLikes();
  }
}
//

// DO NOT EDIT THIS CODE
console.log("Part 8");
console.log("Expected result:");
console.log(2);
console.log(2);
console.log(2);
console.log(2);
console.log("Actual result:");
addStudentLikes(mentors);
for (var i = 0; i < mentors.length; i++) {
  var mentor = mentors[i];
  console.log(mentor.studentLikes);
}
//