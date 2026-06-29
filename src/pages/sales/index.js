import "./sales.css";

import { getSales } from "./salesService.js";

export async function renderSales() {

    const body = document.querySelector(".dashboard-body");

    const sales = await getSales();

    body.innerHTML = `

        <div class="sales-page">

            <h1>Sales History</h1>

            <div id="salesList"></div>

        </div>

    `;

    loadSales(sales);

}

function loadSales(sales) {

    const list = document.getElementById("salesList");

    if (sales.length === 0) {

        list.innerHTML = `

            <div class="empty-sales">

                No sales found.

            </div>

        `;

        return;

    }

    list.innerHTML = "";

    sales.forEach((sale, index) => {

        list.innerHTML += `

            <div class="sale-card">

                <div class="sale-left">

                    <h3>

                        Bill #${String(index + 1).padStart(5, "0")}

                    </h3>

                    <p>${sale.date}</p>

                    <p>${sale.time}</p>

                </div>

                <div class="sale-right">

                    <h2>₹${sale.total}</h2>

                    <span>${sale.paymentMode}</span>

                </div>

            </div>

        `;

    });

}