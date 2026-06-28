export function Sidebar() {
    return `
        <aside class="sidebar">

            <div class="logo">
                CHIPPSU
            </div>

            <nav>

                <button class="nav-item active" id="navDashboard">
                    Dashboard
                </button>

                <button class="nav-item" id="navProducts">
                    Products
                </button>

                <button class="nav-item" id="navBilling">
                    Billing
                </button>

                <button class="nav-item">
                    Inventory
                </button>

                <button class="nav-item">
                    Sales
                </button>

                <button class="nav-item">
                    Expenses
                </button>

                <button class="nav-item">
                    Reports
                </button>

                <button class="nav-item">
                    Settings
                </button>

            </nav>

            <button id="logoutBtn" class="logout">
                Logout
            </button>

        </aside>
    `;
}