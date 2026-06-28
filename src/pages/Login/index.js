import "./login.css";

import { login } from "../../services/authService.js";
import { renderDashboard } from "../dashboard/index.js";

export function renderLogin() {

    document.querySelector("#app").innerHTML = `

        <div class="login-page">

            <div class="login-card">

                <div class="login-logo">
                    CHIPPSU
                </div>

                <h1>Business OS</h1>

                <p>Owner Login</p>

                <div class="form-group">

                    <label>Username</label>

                    <input
                        id="username"
                        type="text"
                        placeholder="Username">

                </div>

                <div class="form-group">

                    <label>Password</label>

                    <input
                        id="password"
                        type="password"
                        placeholder="Password">

                </div>

                <button id="loginButton">

                    Login

                </button>

            </div>

        </div>

    `;

    document
        .getElementById("loginButton")
        .addEventListener("click", handleLogin);

}

function handleLogin() {

    const username = document
        .getElementById("username")
        .value
        .trim();

    const password = document
        .getElementById("password")
        .value;

    if (login(username, password)) {

        renderDashboard();

    } else {

        alert("Invalid Username or Password");

    }

}