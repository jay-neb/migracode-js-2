/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).

Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp)
================
*/

// Task 1
// task1();

function task1() {
    var seconds = 5;
    var milliSeconds = seconds * 1000;
    setTimeout(changeBgColorOnce, milliSeconds);
}

function changeBgColorOnce() {
    document.body.style.backgroundColor = "lightblue";
}

// Task 2
task2();

function task2() {
    var seconds = 5;
    var milliSeconds = seconds * 1000;

    var colors = ["white", "lightblue", "lightpink", "red", "yellow"];
    var colorIndex = 0;
    document.body.style.backgroundColor = colors[colorIndex];
    
    setInterval(function () {
        colorIndex++;
        if (colorIndex == colors.length) {
            colorIndex = 0;
        }
        document.body.style.backgroundColor = colors[colorIndex];
    }, milliSeconds);
}