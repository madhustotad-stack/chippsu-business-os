import "./dashboard.css";

import "../../components/sidebar/sidebar.css";
import "../../components/header/header.css";
import "../../components/statcard/statcard.css";

import { Sidebar } from "../../components/sidebar/index.js";
import { Header } from "../../components/header/index.js";
import { StatCard } from "../../components/statcard/index.js";

import { logout } from "../../services/authService.js";
import { renderLogin } from "../Login/index.js";

export function renderDashboard() {

    document.querySelector("#app").innerHTML = `

        <div class="dashboard">

            ${Sidebar()}

            <div class="dashboard-body">

                ${Header()}

                <div class="cards">

                    ${StatCard("Today's Sales", "₹0")}

                    ${StatCard("Today's Orders", "0")}

                    ${StatCard("Today's Revenue", "₹0")}

                    ${StatCard("Active Shift", "OPEN")}

                </div>

            </div>

        </div>

    `;

    document
        .getElementById("logoutBtn")
        .addEventListener("click", handleLogout);

}

function handleLogout() {

    logout();

    renderLogin();

}