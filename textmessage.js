document.addEventListener('DOMContentLoaded', () => {
    truncateText();
    window.addEventListener('resize', truncateText);
});

function truncateText() {
    const bookList = document.getElementById('bookList');
    bookList.querySelectorAll('.book div:first-child').forEach(bookNameDiv => {
        const boxWidth = bookNameDiv.parentElement.offsetWidth;
        const textWidth = bookNameDiv.scrollWidth;
        if (textWidth > boxWidth * 0.7) {
            bookNameDiv.style.whiteSpace = 'nowrap';
            bookNameDiv.style.overflow = 'hidden';
            bookNameDiv.style.textOverflow = 'ellipsis';
        } else {
            bookNameDiv.style.whiteSpace = '';
            bookNameDiv.style.overflow = '';
            bookNameDiv.style.textOverflow = '';
        }
    });
}
