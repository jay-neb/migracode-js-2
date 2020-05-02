/**
 *
 * For each of the names in the array passed into this function
 *
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * <div id="content">
 *      <h1>{Name Here}</h1>
 *      <h2>{Job Here}</h2>
 *      .....
 * </div>
 */
function exerciseOne(arrayOfPeople) {
  var content = document.querySelector("#content");
  for (var i = 0; i < arrayOfPeople.length; i++) {
    var person = arrayOfPeople[i];

    var nameElement = document.createElement("h1");
    nameElement.innerText = person.name;
    content.appendChild(nameElement);

    var jobElement = document.createElement("h2");
    jobElement.innerText = person.job;
    content.appendChild(jobElement);
  }
}

/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */
function exerciseTwo(shopping) {
  var content = document.querySelector("#content");
  var unorderedList = document.createElement("ul");
  content.appendChild(unorderedList);
  for (var i = 0; i < shopping.length; i++) {
    var listItem = document.createElement("li");
    listItem.innerText = shopping[i];
    unorderedList.appendChild(listItem);
  }
}

/**
    I'd like to display my three favorite books inside a nice webpage!

    var books = [
        {
            title: "The Design of Everyday Things",
            author: "Don Norman",
            alreadyRead: false
        },
        {
            title: "The Most Human Human",
            author: "Brian Christian",
            alreadyRead: true
        },
        {
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            alreadyRead: true
        }
    ];

    Iterate through the array of books.
    - For each book, create a <p> element with the book title and author and append it to the page.
    - Use a <ul> and <li> to display the books.
    - Add an <img> to each book that links to a URL of the book cover.
    - Change the style of the book depending on whether you have read it (green) or not (red).

    The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
**/
function exerciseThree(books) {
  var content = document.querySelector("#content");
  var unorderedList = document.createElement("ul");
  // unorderedList.style.display = "flex";
  content.appendChild(unorderedList);
  for (var i = 0; i < books.length; i++) {
    var book = books[i];
    var listItem = document.createElement("li");
    
    var paragraph = document.createElement("p");
    paragraph.innerText = book.title + " by " + book.author;
    listItem.appendChild(paragraph);

    var link = document.createElement("a");
    link.href = book.cover;
    var image = document.createElement("img");
    image.src = book.cover;
    link.appendChild(image);
    listItem.appendChild(link);

    if (book.alreadyRead) {
      listItem.style.backgroundColor = "green";
    }
    else {
      listItem.style.backgroundColor = "red";
    }

    unorderedList.appendChild(listItem);
  }
}

//
//
//
//
// DO NOT EDIT BELOW HERE
//
//
//
//

var people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" }
];

exerciseOne(people);

var shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);

var books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    cover: "https://images-na.ssl-images-amazon.com/images/I/410RTQezHYL._SY291_BO1,204,203,200_QL40_ML2_.jpg"
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1295465264l/8884400.jpg"
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    cover: "https://m.media-amazon.com/images/I/41uPjEenkFL._SX260_.jpg"
  }
];

exerciseThree(books);
