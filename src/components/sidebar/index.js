export function Sidebar() {

    return `

        <aside class="sidebar">

            <div class="logo">

                CHIPPSU

            </div>

            <nav class="nav">

                <button
                    id="navDashboard"
                    class="nav-item">

                    Dashboard

                </button>

                <button
                    id="navProducts"
                    class="nav-item">

                    Products

                </button>

                <button
                    id="navBilling"
                    class="nav-item">

                    Billing

                </button>

                <button
                    id="navSales"
                    class="nav-item">

                    Sales History

                </button>

                <button
                    id="logoutBtn"
                    class="nav-item logout">

                    Logout

                </button>

            </nav>

        </aside>

    `;

}