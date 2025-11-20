// ======================
// SHOPPING CART CLASS
// ======================
class ShoppingCart {
    constructor() {
        this.items = this.loadFromStorage();
        this.updateUI();
    }

    addItem(product, quantity = 1) {
        const existingItem = this.items.find(item => item.id === product.id);

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({
                ...product,
                quantity: quantity
            });
        }

        this.saveToStorage();
        this.updateUI();
        this.showNotification(`${product.name} agregado al carrito`);
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.saveToStorage();
        this.updateUI();
    }

    updateQuantity(productId, quantity) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
            if (quantity <= 0) {
                this.removeItem(productId);
            } else {
                item.quantity = quantity;
                this.saveToStorage();
                this.updateUI();
            }
        }
    }

    getTotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    getItemCount() {
        return this.items.reduce((count, item) => count + item.quantity, 0);
    }

    clear() {
        this.items = [];
        this.saveToStorage();
        this.updateUI();
    }

    saveToStorage() {
        localStorage.setItem('cosmodata_cart', JSON.stringify(this.items));
    }

    loadFromStorage() {
        const saved = localStorage.getItem('cosmodata_cart');
        return saved ? JSON.parse(saved) : [];
    }

    updateUI() {
        this.updateCartBadge();
        this.updateCartModal();
    }

    updateCartBadge() {
        const badge = document.querySelector('.cart-badge');
        if (badge) {
            const count = this.getItemCount();
            badge.textContent = count;
            badge.style.display = count > 0 ? 'flex' : 'none';
        }
    }

    updateCartModal() {
        const cartItemsContainer = document.getElementById('cart-items');
        const cartTotal = document.getElementById('cart-total');
        const emptyMessage = document.getElementById('cart-empty');

        if (!cartItemsContainer) return;

        if (this.items.length === 0) {
            if (emptyMessage) emptyMessage.style.display = 'block';
            cartItemsContainer.innerHTML = '';
            if (cartTotal) cartTotal.textContent = '$0.00';
            return;
        }

        if (emptyMessage) emptyMessage.style.display = 'none';

        cartItemsContainer.innerHTML = this.items.map(item => `
            <div class="cart-item" data-id="${item.id}">
                <img src="${item.image}" alt="${item.name}" class="cart-item__image">
                <div class="cart-item__details">
                    <h4 class="cart-item__name">${item.name}</h4>
                    <p class="cart-item__price">$${item.price.toFixed(2)}</p>
                </div>
                <div class="cart-item__controls">
                    <button class="btn-quantity" onclick="cart.updateQuantity(${item.id}, ${item.quantity - 1})">
                        <i class="fas fa-minus"></i>
                    </button>
                    <span class="cart-item__quantity">${item.quantity}</span>
                    <button class="btn-quantity" onclick="cart.updateQuantity(${item.id}, ${item.quantity + 1})">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
                <button class="btn-remove" onclick="cart.removeItem(${item.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `).join('');

        if (cartTotal) {
            cartTotal.textContent = `$${this.getTotal().toFixed(2)}`;
        }
    }

    showNotification(message) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'cart-notification';
        notification.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <span>${message}</span>
        `;

        document.body.appendChild(notification);

        // Trigger animation
        setTimeout(() => notification.classList.add('show'), 10);

        // Remove after 3 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
}

// Initialize cart
const cart = new ShoppingCart();

// ======================
// UI FUNCTIONS
// ======================

// Render products in a container
function renderProducts(productsArray, containerId, filterCategory = null) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let filteredProducts = productsArray;
    if (filterCategory && filterCategory !== 'todos') {
        filteredProducts = productsArray.filter(p => p.category === filterCategory);
    }

    container.innerHTML = filteredProducts.map(product => `
        <div class="product-card" data-aos="zoom-in" data-aos-delay="${Math.random() * 200}">
            ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image" 
                     onerror="this.src='assets/images/placeholder.jpg'">
                <div class="product-overlay">
                    <button class="btn-quick-view" onclick="openProductModal(${product.id})">
                        <i class="fas fa-eye"></i> Vista Rápida
                    </button>
                </div>
            </div>
            <div class="product-rating">
                ${generateStars(product.rating)}
                <span class="rating-text">${product.rating} (${product.reviews})</span>
            </div>
            <h3 class="product-title">${product.name}</h3>
            <p class="product-price">$${product.price.toFixed(2)}</p>
            <button class="btn-add-cart" onclick="cart.addItem(products[${product.id - 1}])">
                <i class="fas fa-shopping-cart"></i> Agregar al Carrito
            </button>
        </div>
    `).join('');
}

// Generate star rating HTML
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    let stars = '';
    for (let i = 0; i < fullStars; i++) stars += '<i class="fas fa-star"></i>';
    if (hasHalfStar) stars += '<i class="fas fa-star-half-alt"></i>';
    for (let i = 0; i < emptyStars; i++) stars += '<i class="far fa-star"></i>';

    return stars;
}

// Open product modal
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById('product-modal');
    if (!modal) return;

    const modalContent = document.getElementById('product-modal-content');
    modalContent.innerHTML = `
        <button class="modal-close" onclick="closeProductModal()">
            <i class="fas fa-times"></i>
        </button>
        <div class="product-modal-grid">
            <div class="product-modal-image">
                <img src="${product.image}" alt="${product.name}" 
                     onerror="this.src='assets/images/placeholder.jpg'">
            </div>
            <div class="product-modal-info">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                <h2 class="product-modal-title">${product.name}</h2>
                <div class="product-rating">
                    ${generateStars(product.rating)}
                    <span class="rating-text">${product.rating} (${product.reviews} reseñas)</span>
                </div>
                <p class="product-modal-price">$${product.price.toFixed(2)}</p>
                <p class="product-modal-description">${product.description}</p>
                ${product.specs ? `
                    <div class="product-specs">
                        <h4>Especificaciones:</h4>
                        <ul>
                            ${product.specs.map(spec => `<li>${spec}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}
                <div class="product-modal-actions">
                    <div class="quantity-selector">
                        <button onclick="decreaseQuantity()"><i class="fas fa-minus"></i></button>
                        <input type="number" id="modal-quantity" value="1" min="1" max="99">
                        <button onclick="increaseQuantity()"><i class="fas fa-plus"></i></button>
                    </div>
                    <button class="btn-add-cart btn-large" onclick="addFromModal(${product.id})">
                        <i class="fas fa-shopping-cart"></i> Agregar al Carrito
                    </button>
                </div>
            </div>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProductModal() {
    const modal = document.getElementById('product-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function increaseQuantity() {
    const input = document.getElementById('modal-quantity');
    if (input) input.value = parseInt(input.value) + 1;
}

function decreaseQuantity() {
    const input = document.getElementById('modal-quantity');
    if (input && parseInt(input.value) > 1) {
        input.value = parseInt(input.value) - 1;
    }
}

function addFromModal(productId) {
    const product = products.find(p => p.id === productId);
    const quantity = parseInt(document.getElementById('modal-quantity').value);
    cart.addItem(product, quantity);
    closeProductModal();
}

// Cart modal functions
function openCartModal() {
    const modal = document.getElementById('cart-modal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeCartModal() {
    const modal = document.getElementById('cart-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Filter products by category
function filterProducts(category) {
    renderProducts(products, 'products-container', category);

    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Setup cart icon click
    const cartIcon = document.getElementById('cart-icon');
    if (cartIcon) {
        cartIcon.addEventListener('click', openCartModal);
    }

    // Close modals on backdrop click
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    // Load products if on shop page
    if (document.getElementById('products-container')) {
        renderProducts(products, 'products-container');
    }
});
