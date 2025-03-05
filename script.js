document.addEventListener('DOMContentLoaded', () => {
    loadBooks();
});

document.getElementById('addBookButton').addEventListener('click', () => {
    const bookName = document.getElementById('bookInput').value;
    if (bookName) {
        addBook(bookName, 'At Home'); // Default status is 'At Home'
        saveBooks();
        document.getElementById('bookInput').value = '';
    }
});

function addBook(name, status) {
    const bookList = document.getElementById('bookList');
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');

    const bookNameDiv = document.createElement('div');
    bookNameDiv.textContent = name;

    const atHomeButton = document.createElement('button');
    atHomeButton.textContent = status;
    atHomeButton.classList.add('button');
    atHomeButton.addEventListener('click', () => {
        atHomeButton.textContent = atHomeButton.textContent === 'At Home' ? 'At School' : 'At Home';
        saveBooks();
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('button');
    deleteButton.addEventListener('click', () => {
        bookDiv.remove();
        saveBooks();
    });

    const buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('buttons');
    buttonsDiv.appendChild(atHomeButton);
    buttonsDiv.appendChild(deleteButton);

    bookDiv.appendChild(bookNameDiv);
    bookDiv.appendChild(buttonsDiv);
    bookList.appendChild(bookDiv);
}

function saveBooks() {
    const books = [];
    document.querySelectorAll('#bookList .book').forEach(bookDiv => {
        const bookName = bookDiv.childNodes[0].textContent;
        const bookStatus = bookDiv.childNodes[1].childNodes[0].textContent;
        books.push({ name: bookName, status: bookStatus });
    });
    document.cookie = `books=${JSON.stringify(books)};path=/`;
}

function loadBooks() {
    const books = getCookie('books');
    if (books) {
        JSON.parse(books).forEach(book => addBook(book.name, book.status));
    }
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}
function addBook(name, status) {
    const bookList = document.getElementById('bookList');
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');

    const bookNameDiv = document.createElement('div');
    bookNameDiv.textContent = name;
    bookNameDiv.classList.add('book-name');

    const atHomeButton = document.createElement('button');
    atHomeButton.textContent = status;
    atHomeButton.classList.add('button', status.toLowerCase().replace(' ', '-'));
    atHomeButton.addEventListener('click', () => {
        const isAtHome = atHomeButton.textContent === 'At Home';
        atHomeButton.textContent = isAtHome ? 'At School' : 'At Home';
        atHomeButton.classList.toggle('at-home', !isAtHome);
        atHomeButton.classList.toggle('at-school', isAtHome);
        bookNameDiv.style.color = atHomeButton.classList.contains('at-home') ? '#007bff' : '#02991d'; // Update text color
        saveBooks();
        truncateText();
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('button');
    deleteButton.addEventListener('click', () => {
        bookDiv.remove();
        saveBooks();
    });

    const buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('buttons');
    buttonsDiv.appendChild(atHomeButton);
    buttonsDiv.appendChild(deleteButton);

    bookDiv.appendChild(bookNameDiv);
    bookDiv.appendChild(buttonsDiv);
    bookList.appendChild(bookDiv);
    truncateText();
}

function loadBooks() {
    const books = getCookie('books');
    if (books) {
        JSON.parse(books).forEach(book => {
            addBook(book.name, book.status);
            document.querySelector('.book:last-child .book-name').style.color = book.status === 'At Home' ? '#007bff' : '#02991d'; // Set initial text color
        });
    }
}



document.getElementById('addBookButton').addEventListener('click', function() {
    const bookInput = document.getElementById('bookInput').value;

    if (bookInput) {
        const bookList = document.getElementById('bookList');
        const bookItem = document.createElement('div');
        
        bookItem.innerHTML = `<img src="https://www.greenford.ealing.sch.uk/_site/images/favicons/favicon.ico" width="16px" style="vertical-align: middle; margin-right: 5px;"> ${bookInput}`;

        bookList.appendChild(bookItem);
    }
});

