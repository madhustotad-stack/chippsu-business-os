import "./styles/style.css";

import db from "./database/db.js";

import { renderLogin } from "./pages/Login/index.js";
import { renderDashboard } from "./pages/dashboard/index.js";

import { initializeOwner } from "./services/authService.js";
import { hasSession } from "./services/sessionService.js";

async function start() {

    await db.open();

    initializeOwner();

    if (hasSession()) {
        renderDashboard();
    } else {
        renderLogin();
    }

}

start();