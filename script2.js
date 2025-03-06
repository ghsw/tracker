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

    const atHomeButton = document.createElement('button');
    atHomeButton.className = 'button at-home';
    atHomeButton.textContent = 'At Home';
    atHomeButton.addEventListener('click', () => markAtHome(bookDiv));

    const atSchoolButton = document.createElement('button');
    atSchoolButton.className = 'button at-school';
    atSchoolButton.textContent = 'At School';
    atSchoolButton.addEventListener('click', () => markAtSchool(bookDiv));

    const removeButton = document.createElement('button');
    removeButton.className = 'button remove';
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => removeBook(bookDiv));

    buttonsDiv.appendChild(atHomeButton);
    buttonsDiv.appendChild(atSchoolButton);
    buttonsDiv.appendChild(removeButton);

    bookDiv.appendChild(bookNameDiv);
    bookDiv.appendChild(buttonsDiv);

    bookList.appendChild(bookDiv);

    bookInput.value = '';
}

function markAtHome(bookDiv) {
    bookDiv.querySelector('.book-name').style.color = 'blue';
}

function markAtSchool(bookDiv) {
    bookDiv.querySelector('.book-name').style.color = 'green';
}

function removeBook(bookDiv) {
    bookDiv.remove();
}
