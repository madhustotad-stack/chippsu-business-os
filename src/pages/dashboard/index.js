import "./dashboard.css";

import "../../components/sidebar/sidebar.css";
import "../../components/header/header.css";
import "../../components/statcard/statcard.css";

import { Sidebar } from "../../components/sidebar/index.js";
import { Header } from "../../components/header/index.js";
import { StatCard } from "../../components/statcard/index.js";

import { logout } from "../../services/authService.js";
import { renderLogin } from "../Login/index.js";
import { renderProducts } from "../products/index.js";
import { renderBilling } from "../billing/index.js";

export function renderDashboard() {

    document.querySelector("#app").innerHTML = `

        <div class="dashboard">

            ${Sidebar()}

            <div class="dashboard-body">

                ${Header()}

                <div class="cards">

                    ${StatCard("Today's Sales","₹0","green")}
                    ${StatCard("Today's Orders","0","blue")}
                    ${StatCard("Today's Revenue","₹0","orange")}
                    ${StatCard("Active Shift","OPEN","green")}

                </div>

                <div class="quick-actions">

                    <button class="action-btn">
                        + New Sale
                    </button>

                    <button class="action-btn" id="addProductBtn">
                        + Products
                    </button>

                    <button class="action-btn">
                        + Stock In
                    </button>

                    <button class="action-btn">
                        + Expense
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
        .getElementById("addProductBtn")
        .addEventListener("click", renderProducts);

    document
        .getElementById("navBilling")
        .addEventListener("click", renderBilling);
}