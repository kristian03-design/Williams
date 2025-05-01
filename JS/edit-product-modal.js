function toggleModal() {
    const editProductModal = document.getElementById('editProductModal');
    editProductModal.style.display = editProductModal.style.display === 'flex' ? 'none' : 'flex';
}

function openEditModal(productName, category, price, stock, status) {
    const editProductModal = document.getElementById('editProductModal');
    editProductModal.style.display = 'block';
    editProductModal.style.flexDirection = 'column';
    editProductModal.style.justifyContent = 'center';
    editProductModal.style.alignItems = 'center';
    editProductModal.style.fontSize = '1.1rem';

    const inputs = editProductModal.querySelectorAll('input, textarea');
    inputs[0].value = productName;
    inputs[1].value = price;
    inputs[2].value = stock;
    inputs[3].checked = status === 'Low Stock';
    editProductModal.querySelector('textarea').value = `Description for ${productName}`;
}

function closeEditModal() {
    const editProductModal = document.getElementById('editProductModal');
    editProductModal.style.display = 'none';
    document.body.style.filter = 'none'; // Remove blur from the background
}

function saveChanges() {
    alert('Changes saved successfully!');
    closeEditModal();
}

function deleteProduct() {
    if (confirm('Are you sure you want to delete this product?')) {
        alert('Product deleted successfully!');
        closeEditModal();
    }
}

// Close modal when clicking outside of it
window.addEventListener("click", function (event) {
    const editProductModal = document.getElementById('editProductModal');
    if (editProductModal && event.target === editProductModal) {
        closeEditModal();
    }
});
// Add event listener for the close button
document.addEventListener('DOMContentLoaded', () => {
    const closeButton = document.getElementById('closeModalButton'); // Assuming you have a close button with this ID
    if (closeButton) {
        closeButton.addEventListener('click', closeEditModal);
    }
});
