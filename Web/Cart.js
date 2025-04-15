let cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartCount = document.getElementById('cart-count');
const cartItems = document.getElementById('cart-items');
const cartModel = document.getElementById('cart-model');
const closeModel = document.querySelector('.close');
const cartLink = document.getElementById('cart-link');

    function updateCartCount() {
        cartCount.textContent = cart.length;
    }

    function renderCartItems() {
        cartItems.innerHTML = '';
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price}`;
            cartItems.appendChild(li);
        }
    )
};

    // Function to open cart modal
    if (cartLink) {
        cartLink.addEventListener('click', (event) => {
            event.preventDefault();
            cartModel.style.display = 'block';
            renderCartItems();
        }
    )
};

    // Function to close cart modal
    if (closeModel) {
        closeModel.addEventListener('click', () => {
            cartModel.style.display = 'none';
        }
    )
};

    // Add event listeners to "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productCard = event.target.closest('.product-card');
            const productName = productCard.getAttribute('data-name');
            const productPrice = parseFloat(productCard.getAttribute('data-price'));

            cart.push({ name: productName, price: productPrice });
            updateCartCount();
            localStorage.setItem('cart', JSON.stringify(cart));
        })
    }
);

    window.addEventListener('click', (event) => {
        if (event.target === cartModel) {
            cartModel.style.display = 'none';
        }
    }
);

    document.getElementById('checkout')?.addEventListener('click', () => {
        alert('Proceeding to checkout...');
        window.location.href = "Checkout.html";
    }
);

    updateCartCount();