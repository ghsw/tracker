document.getElementById('addBookButton').addEventListener('click', addBook);

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
}

function removeBook(bookDiv) {
    bookDiv.remove();
}
