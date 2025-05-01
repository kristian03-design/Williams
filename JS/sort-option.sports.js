
function sortBy(criteria) {
    const itemsContainer = document.querySelector('.services-grid-sport');
    const items = Array.from(itemsContainer.children);
    const buttons = document.querySelectorAll('.btn-sort, .btn-popular');

    // Reset button styles
    buttons.forEach(button => button.style.backgroundColor = '');
    buttons.forEach(button => button.style.color = '');

    if (criteria === 'popular') {
        items.sort((a, b) => {
            // Example: Sort by price descending (assuming popularity is tied to price)
            const priceA = parseFloat(a.querySelector('p').textContent.replace('₱', '').replace(',', ''));
            const priceB = parseFloat(b.querySelector('p').textContent.replace('₱', '').replace(',', ''));
            return priceB - priceA;
        });

        // Highlight the Popular button
        document.querySelector('.btn-sort').style.backgroundColor = '#8D0101';
        document.querySelector('.btn-sort').style.color = '#FFF';
    } else if (criteria === 'newArrival') {
        items.sort((a, b) => {
            // Example: Sort alphabetically by name
            const nameA = a.querySelector('h4').textContent.toLowerCase();
            const nameB = b.querySelector('h4').textContent.toLowerCase();
            return nameA.localeCompare(nameB);
        });

        // Highlight the New Arrival button
        document.querySelector('.btn-popular').style.backgroundColor = '#8D0101';
        document.querySelector('.btn-popular').style.color = '#FFF';
    }

    // Clear and re-append sorted items
    itemsContainer.innerHTML = '';
    items.forEach(item => itemsContainer.appendChild(item));
}