document.getElementById('addBookButton').addEventListener('click', addBook);
document.addEventListener('DOMContentLoaded', loadBooks);

function addBook() {
    const bookInput = document.getElementById('bookInput');
    const bookName = bookInput.value.trim();

    if (bookName === '') {
        alert('Please enter a book name.');
        return;
    }

    const bookList = document.getElementById('bookList');

    const bookDiv = document.createElement('div');
    bookDiv.className = 'book';

    const bookNameDiv = document.createElement('div');
    bookNameDiv.className = 'book-name';
    bookNameDiv.textContent = bookName;

    const buttonsDiv = document.createElement('div');
    buttonsDiv.className = 'buttons';

    const toggleButton = document.createElement('button');
    toggleButton.className = 'button';
    toggleButton.textContent = 'At Home';
    toggleButton.addEventListener('click', () => toggleLocation(bookDiv, toggleButton));

    const removeButton = document.createElement('button');
    removeButton.className = 'button remove';
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => removeBook(bookDiv));

    buttonsDiv.appendChild(toggleButton);
    buttonsDiv.appendChild(removeButton);

    bookDiv.appendChild(bookNameDiv);
    bookDiv.appendChild(buttonsDiv);

    bookList.appendChild(bookDiv);

    saveBooks();
    bookInput.value = '';
}

function toggleLocation(bookDiv, button) {
    if (button.textContent === 'At Home') {
        bookDiv.querySelector('.book-name').style.color = 'green';
        button.textContent = 'At School';
    } else {
        bookDiv.querySelector('.book-name').style.color = 'blue';
        button.textContent = 'At Home';
    }
    saveBooks();
}

function removeBook(bookDiv) {
    bookDiv.remove();
    saveBooks();
}

function saveBooks() {
    const bookList = document.getElementById('bookList').children;
    const books = [];

    for (let i = 0; i < bookList.length; i++) {
        const bookDiv = bookList[i];
        const bookName = bookDiv.querySelector('.book-name').textContent;
        const location = bookDiv.querySelector('.button').textContent;

        books.push({
            name: bookName,
            location: location
        });
    }

    document.cookie = 'books=' + JSON.stringify(books) + '; path=/';
}

function loadBooks() {
    const cookies = document.cookie.split('; ');
    let books = [];

    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split('=');
        if (cookie[0] === 'books') {
            books = JSON.parse(cookie[1]);
            break;
        }
    }

    for (const book of books) {
        const bookList = document.getElementById('bookList');

        const bookDiv = document.createElement('div');
        bookDiv.className = 'book';

        const bookNameDiv = document.createElement('div');
        bookNameDiv.className = 'book-name';
        bookNameDiv.textContent = book.name;
        bookNameDiv.style.color = book.location === 'At Home' ? 'blue' : 'green';

        const buttonsDiv = document.createElement('div');
        buttonsDiv.className = 'buttons';

        const toggleButton = document.createElement('button');
        toggleButton.className = 'button';
        toggleButton.textContent = book.location;
        toggleButton.addEventListener('click', () => toggleLocation(bookDiv, toggleButton));

        const removeButton = document.createElement('button');
        removeButton.className = 'button remove';
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => removeBook(bookDiv));

        buttonsDiv.appendChild(toggleButton);
        buttonsDiv.appendChild(removeButton);

        bookDiv.appendChild(bookNameDiv);
        bookDiv.appendChild(buttonsDiv);

        bookList.appendChild(bookDiv);
    }
}
