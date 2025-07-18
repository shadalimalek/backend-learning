const books = 
    [
        {title: "Atomic Habit", author: "James Clear", read: true},
        {title: "Think and Grow Rich", author: "Napoleon Hills", read: false},
        {title: "You are a Badass", author: "Jen Sincero", read: false},
    ];

for (let book of books) {
    console.log("Book: " + book.title + " by " + book.author + ". Read? " + book.read);
}