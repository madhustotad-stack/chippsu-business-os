import "./billing.css";
import "./paymentModal.css";

import { getProducts } from "../products/productService.js";

import {
    getCart,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    getTotal,
    clearCart
} from "./cartService.js";

import { saveSale } from "./billingService.js";

import { openPaymentModal } from "./paymentModal.js";

import { generateReceipt } from "./receiptService.js";
import { showReceipt } from "./receiptModal.js";

export async function renderBilling() {

    const body = document.querySelector(".dashboard-body");

    const products = await getProducts();
    window.products = products;

    body.innerHTML = `
        <div class="billing-page">

            <div class="billing-products">

                <h2>Products</h2>

                <div id="productGrid" class="product-grid"></div>

            </div>

            <div class="billing-cart">

                <h2>Cart</h2>

                <div id="cartItems"></div>

                <div id="billingTotal" class="billing-total">
                    Total : ₹0
                </div>

                <button
    id="checkoutBtn"
    class="checkout-btn">

    Checkout

</button>

            </div>

        </div>
    `;

    renderProductGrid(products);

    renderCart(window.products);
    document
    .getElementById("checkoutBtn")
    .addEventListener("click", checkout);

}

function renderProductGrid(products) {

    const grid = document.getElementById("productGrid");

    grid.innerHTML = "";

    products.forEach(product => {

        grid.innerHTML += `
            <div
                class="product-card"
                data-id="${product.id}">

                <div class="product-icon">🍟</div>

                <h3>${product.name}</h3>

                <p>₹${product.price}</p>

            </div>
        `;

    });

    document.querySelectorAll(".product-card").forEach(card => {

        card.addEventListener("click", () => {

            const product = products.find(
                p => p.id === Number(card.dataset.id)
            );

            addToCart(product);

            renderCart(window.products);

        });

    });

}

function renderCart(products) {

    const cart = getCart();

    const cartDiv = document.getElementById("cartItems");

    if (cart.length === 0) {

        cartDiv.innerHTML = "<p>No items added.</p>";

    } else {

        cartDiv.innerHTML = "";

        cart.forEach(item => {

            cartDiv.innerHTML += `
                <div class="cart-item">

                    <strong>${item.name}</strong>

                    <p>₹${item.price}</p>

                    <div>

                        <button
                            class="minus"
                            data-id="${item.id}">
                            -
                        </button>

                        <span>${item.quantity}</span>

                        <button
                            class="plus"
                            data-id="${item.id}">
                            +
                        </button>

                    </div>

                </div>
            `;

        });

    }

    document.getElementById("billingTotal").textContent =
        "Total : ₹" + getTotal();

    attachCartEvents(products);

}

function attachCartEvents(products) {

    document.querySelectorAll(".plus").forEach(button => {

        button.onclick = () => {

            increaseQuantity(Number(button.dataset.id));

            renderCart(window.products);

        };

    });

    document.querySelectorAll(".minus").forEach(button => {

        button.onclick = () => {

            decreaseQuantity(Number(button.dataset.id));

            renderCart(window.products);

        };

    });

}
async function checkout() {

    const cart = getCart();

    if (cart.length === 0) {

        alert("Cart is empty.");

        return;

    }

    openPaymentModal(getTotal(), async (paymentMode) => {

        try {

            const saleId = await saveSale(cart, paymentMode);

const receipt = generateReceipt(
    saleId,
    cart,
    paymentMode
);

clearCart();

renderCart(window.products);

showReceipt(receipt);

        } catch (error) {

            alert(error.message);

        }

    });

}