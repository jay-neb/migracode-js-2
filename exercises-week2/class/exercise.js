/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/

// 1.
var pNodes = document.querySelectorAll("p");
console.log(pNodes);

// 2.
var firstDivNode = document.querySelector("div");
console.log(firstDivNode);

// 3.
var jumbotronText = document.querySelector("#jumbotron-text");
console.log(jumbotronText);

// 4.
var primaryContent = document.querySelector(".primary-content");
var primaryContentPNodes = primaryContent.querySelectorAll("p");
console.log(primaryContentPNodes);

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

var alertButton = document.querySelector("#alertBtn");
alertButton.addEventListener("click", onAlertClicked);

function onAlertClicked() {
    alert("Thanks for visiting Bikes for Refugees!");
}

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

var changeBgButton = document.querySelector("#bgrChangeBtn");
changeBgButton.addEventListener("click", changeBackground);

function changeBackground() {
    document.body.style.background = "lightgrey";

    // Another way of doing it:
    // var body = document.querySelector("body");
    // body.style.background = "lightgrey";
}

/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added inside the section that says "LEARN MORE"
*/

var addTextButton = document.querySelector("#addTextBtn");
addTextButton.addEventListener("click", addText);

var number = 1;

function addText() {
    var mainArticles = document.querySelector("#mainArticles");
    var paragraph = document.createElement("p");
    mainArticles.appendChild(paragraph);
    // Note: To insert the paragraph at a specific position, you can use insertBefore() instead of appendChild()
    // mainArticles.insertBefore(p, mainArticles.children[1]);

    paragraph.innerText = "This is new paragraph " + number;
    number++;
}

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

var largerLinksButton = document.querySelector("#largerLinksBtn");
largerLinksButton.addEventListener("click", enlargeLinks);

var fontSize = 20;

function enlargeLinks() {
    var links = document.querySelectorAll("a");
    for (var i = 0; i < links.length; i++) {
        links[i].style.fontSize = fontSize + "px";
        // The font size variable is being used here to increase the font size every time the button is clicked
        // If don't want to increase every time, you can just put "20px" instead of fontSize + "px"
    }
    fontSize++;
}

/*
Task 6
======

When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/

var addArticleBtn = document.querySelector("#addArticleBtn");
addArticleBtn.addEventListener("click", addArticle);

function addArticle() {
    var addArticleInput = document.querySelector("#addArticleInput");
    var inputValue = addArticleInput.value;

    // Continue here

}