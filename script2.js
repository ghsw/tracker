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

    const expiryDate = new Date();
    expiryDate.setTime(expiryDate.getTime() + (7*365*24*60*60*1000)); // 7 years expiration
    const expires = "expires=" + expiryDate.toUTCString();

    document.cookie = 'books=' + JSON.stringify(books) + '; ' + expires + '; path=/';
}
