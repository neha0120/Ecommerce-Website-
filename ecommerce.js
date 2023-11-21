document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const viewCartButton = document.getElementById('view-cart');
    const cartItemsList = document.getElementById('cart-items');
    const cartModal = document.getElementById('cart-modal');
    const closeModalButton = document.getElementById('close-modal');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    viewCartButton.addEventListener('click', openCartModal);
    closeModalButton.addEventListener('click', closeCartModal);

    function addToCart() {
        const product = this.parentElement;
        const productId = product.getAttribute('data-id');
        const productName = product.querySelector('h2').textContent;

        const cartItem = document.createElement('li');
        cartItem.textContent = productName;
        cartItem.setAttribute('data-id', productId);
        cartItemsList.appendChild(cartItem);
    }

    function openCartModal() {
        // Display the modal
        cartModal.style.display = 'block';

        // Populate the modal with cart items
        const cartItems = cartItemsList.innerHTML;
        document.getElementById('modal-items').innerHTML = cartItems;
    }

    function closeCartModal() {
        // Close the modal
        cartModal.style.display = 'none';
    }
});
