let paymentCallback = null;

export function openPaymentModal(total, callback) {

    paymentCallback = callback;

    document.body.insertAdjacentHTML(
        "beforeend",
        `
        <div id="paymentOverlay" class="payment-overlay">

            <div class="payment-modal">

                <h2>Select Payment</h2>

                <div class="payment-total">

                    Total : ₹${total}

                </div>

                <button
                    id="cashBtn"
                    class="payment-btn cash">

                    Cash

                </button>

                <button
                    id="upiBtn"
                    class="payment-btn upi">

                    UPI

                </button>

                <button
                    id="cancelPayment"
                    class="payment-btn cancel">

                    Cancel

                </button>

            </div>

        </div>
        `
    );

    document
        .getElementById("cashBtn")
        .onclick = () => finish("Cash");

    document
        .getElementById("upiBtn")
        .onclick = () => finish("UPI");

    document
        .getElementById("cancelPayment")
        .onclick = closePaymentModal;

}

function finish(mode) {

    closePaymentModal();

    if (paymentCallback) {

        paymentCallback(mode);

    }

}

export function closePaymentModal() {

    document
        .getElementById("paymentOverlay")
        ?.remove();

}