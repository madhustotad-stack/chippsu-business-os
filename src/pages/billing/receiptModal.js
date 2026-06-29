import "./receiptModal.css";

export function showReceipt(receipt) {

    document.body.insertAdjacentHTML(
        "beforeend",
        `
        <div id="receiptOverlay" class="receipt-overlay">

            <div class="receipt-modal">

                <h2>CHIPPSU</h2>

                <p><strong>Bill :</strong> ${receipt.billNo}</p>

                <p>${receipt.date}</p>

                <p>${receipt.time}</p>

                <hr>

                ${receipt.items.map(item => `

                    <div class="receipt-row">

                        <span>

                            ${item.name} × ${item.quantity}

                        </span>

                        <span>

                            ₹${item.price * item.quantity}

                        </span>

                    </div>

                `).join("")}

                <hr>

                <div class="receipt-total">

                    ₹${receipt.total}

                </div>

                <p>

                    Payment : ${receipt.paymentMode}

                </p>

                <button id="closeReceipt">

                    Done

                </button>

            </div>

        </div>
        `
    );

    document
        .getElementById("closeReceipt")
        .onclick = () => {

            document
                .getElementById("receiptOverlay")
                .remove();

        };

}