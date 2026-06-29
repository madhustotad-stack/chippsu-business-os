import db from "../../database/db.js";

export async function getSales() {

    const sales = await db.sales
        .orderBy("id")
        .reverse()
        .toArray();

    return sales;

}

export async function getSaleItems(saleId) {

    return await db.saleItems
        .where("saleId")
        .equals(saleId)
        .toArray();

}