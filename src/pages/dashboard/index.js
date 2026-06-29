import "./dashboard.css";

import "../../components/sidebar/sidebar.css";
import "../../components/header/header.css";
import "../../components/statcard/statcard.css";

import { Sidebar } from "../../components/sidebar/index.js";
import { Header } from "../../components/header/index.js";
import { StatCard } from "../../components/statcard/index.js";

import { logout } from "../../services/authService.js";
import { getDashboardStats } from "../../services/dashboardService.js";

import { renderLogin } from "../Login/index.js";
import { renderProducts } from "../products/index.js";
import { renderBilling } from "../billing/index.js";
import { renderSales } from "../sales/index.js";

export async function renderDashboard() {

    const stats = await getDashboardStats();

    document.querySelector("#app").innerHTML = `

        <div class="dashboard">

            ${Sidebar()}

            <div class="dashboard-body">

                ${Header()}

                <div class="cards">

                    ${StatCard("Today's Sales", `₹${stats.sales}`, "green")}

                    ${StatCard("Today's Orders", stats.orders, "blue")}

                    ${StatCard("Today's Revenue", `₹${stats.revenue}`, "orange")}

                    ${StatCard("Active Shift", stats.shift, "green")}

                </div>

                <div class="quick-actions">

                    <button
                        class="action-btn"
                        id="billingBtn">

                        New Sale

                    </button>

                    <button
                        class="action-btn"
                        id="productsBtn">

                        Products

                    </button>

                </div>

            </div>

        </div>

    `;

    document
        .getElementById("logoutBtn")
        .addEventListener("click", () => {

            logout();

            renderLogin();

        });

    document
        .getElementById("navProducts")
        .addEventListener("click", renderProducts);

    document
        .getElementById("navBilling")
        .addEventListener("click", renderBilling);

    document
        .getElementById("productsBtn")
        .addEventListener("click", renderProducts);

    document
        .getElementById("billingBtn")
        .addEventListener("click", renderBilling);

    document
        .getElementById("navSales")
        .addEventListener("click", renderSales);

}