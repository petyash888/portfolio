var library = [
    {
        title: "Lord of the Rings",
        author: "Tolkien",
        readingStatus: true
    },
    {
        title: "Hobbit",
        author: "Tolkien",
        readingStatus: true
    },
    {
        title: "Harry Potter and the chamber of secrets",
        author: "J.K. Rowling",
        readingStatus: false
    },
    {
        title: "Alice's Adventures in Wonderland",
        author: "Lewis Carroll",
        readingStatus: false
    },
    {
        author: "Walter Isaacson",
        title: "Steve Jobs",
        readingStatus: false
    }
];
console.log(library);

//create table and fill it with the array of objects

var table = document.getElementById("books");


//for (var i = 0; i < library.length; i++) {
//    fillBooksInTable(library[i], i);
//}

library.forEach(fillBooksInTable);

function fillBooksInTable(data, index){
    var rowId = index + 1;
    var row = table.insertRow(rowId);
    
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);


    cell1.innerHTML = data.title;
    cell2.innerHTML = data.author;
    cell3.innerHTML = data.readingStatus;
}





