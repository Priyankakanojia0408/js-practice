// ---------- Library Array ----------
let library = [];


// ---------- Load saved library from localStorage ----------
function loadLibrary() {
  let saved = localStorage.getItem("library");
  if (saved) {
    library = JSON.parse(saved);
  }
}

// ---------- Save library to localStorage ----------
function saveLibrary() {
  localStorage.setItem("library", JSON.stringify(library));
}

// ---------- Function to Add a Book ----------
function addBook() {
  let title = prompt("Enter book title:");
  let author = prompt("Enter book author:");
  let isReadInput = prompt("Have you read it? (yes/no):").toLowerCase();

  let isRead = isReadInput === "yes";

  let newBook = {
    title: title,
    author: author,
    isRead: isRead
  };

  library.push(newBook);
  alert(`Book "${title}" added successfully!`);
}

// ---------- Function to List All Books ----------
function listBooks() {
  if (library.length === 0) {
    alert("No books in your library yet.");
    return;
  }

  console.clear();
  console.log("📚 Your Book List:");
  library.forEach((book, index) => {
    console.log(
      `${index + 1}. ${book.title} by ${book.author} - ${book.isRead ? "READ" : "NOT READ"}`
    );
  });

  alert("Books listed in console.");
}

// ---------- Function to Mark a Book as Read ----------
function markAsRead() {
  let title = prompt("Enter the title of the book to mark as read:");

  let book = library.find(b => b.title.toLowerCase() === title.toLowerCase());

  if (book) {
    book.isRead = true;
    alert(`"${book.title}" marked as read!`);
  } else {
    alert("Book not found.");
  }
}

// ---------- BONUS: Remove a Book ----------
function removeBook() {
  let title = prompt("Enter the title of the book to remove:");

  let index = library.findIndex(b => b.title.toLowerCase() === title.toLowerCase());

  if (index !== -1) {
    let removed = library.splice(index, 1);
    alert(`Removed: "${removed[0].title}"`);
  } else {
    alert("Book not found.");
  }
}

// ---------- BONUS: List Unread Books ----------
function listUnreadBooks() {
  let unread = library.filter(book => !book.isRead);

  if (unread.length === 0) {
    alert("You have no unread books!");
    return;
  }

  console.clear();
  console.log("📘 Unread Books:");
  unread.forEach((book, index) => {
    console.log(`${index + 1}. ${book.title} by ${book.author}`);
  });

  alert("Unread books listed in console.");
}



// ---------- Clear all books ----------
function clearAllBooks() {
  if (confirm("Are you sure you want to delete all books?")) {
    library = [];
    saveLibrary();
    alert("All books removed!");
  }
}


// ---------- Menu Loop ----------
function menu() {
  let choice;

  do {
    choice = prompt(
      "📚 BOOK TRACKER MENU\n\n" +
      "1. Add Book\n" +
      "2. List All Books\n" +
      "3. Mark Book as Read\n" +
      "4. Remove Book (Bonus)\n" +
      "5. List Unread Books (Bonus)\n" +
      "0. Exit\n\n" +
      "Enter your choice:"
    );

    switch (choice) {
      case "1":
        addBook();
        break;
      case "2":
        listBooks();
        break;
      case "3":
        markAsRead();
        break;
      case "4":
        removeBook();
        break;
      case "5":
        listUnreadBooks();
        break;
      case "0":
        alert("Goodbye!");
        break;
      default:
        alert("Invalid choice. Try again.");
    }

  } while (choice !== "0");
}

// Start the menu automatically
menu();


