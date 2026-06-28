let cart = [];

export function getCart() {
    return cart;
}

export function addToCart(product) {

    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {

        existingItem.quantity++;

    } else {

        cart.push({
            id: product.id,
            name: product.name,
            price: Number(product.price),
            quantity: 1
        });

    }

}

export function increaseQuantity(id) {

    const item = cart.find(item => item.id === id);

    if (item) {

        item.quantity++;

    }

}

export function decreaseQuantity(id) {

    const item = cart.find(item => item.id === id);

    if (!item) return;

    item.quantity--;

    if (item.quantity <= 0) {

        cart = cart.filter(item => item.id !== id);

    }

}

export function getTotal() {

    return cart.reduce((total, item) => {

        return total + (item.price * item.quantity);

    }, 0);

}

export function clearCart() {

    cart = [];

}
