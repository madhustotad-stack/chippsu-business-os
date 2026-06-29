import db from "../database/db.js";

export async function getDashboardStats() {

    const today = new Date().toLocaleDateString();

    const sales = await db.sales
        .filter(sale => sale.date === today)
        .toArray();

    const totalRevenue = sales.reduce(
        (sum, sale) => sum + Number(sale.total),
        0
    );

    return {

        orders: sales.length,

        revenue: totalRevenue,

        sales: totalRevenue,

        shift: "OPEN"

    };

}