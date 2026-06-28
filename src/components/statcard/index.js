export function StatCard(title, value, color = "") {
    return `
        <div class="stat-card">

            <div class="stat-title">
                ${title}
            </div>

            <div class="stat-value ${color}">
                ${value}
            </div>

        </div>
    `;
}