export function renderApp() {
    document.querySelector("#app").innerHTML = `
        <div class="app">

            <aside class="sidebar">
                Sidebar
            </aside>

            <div class="content">

                <header class="header">
                    Header
                </header>

                <main class="main">
                    Main Content
                </main>

            </div>

        </div>
    `;
}