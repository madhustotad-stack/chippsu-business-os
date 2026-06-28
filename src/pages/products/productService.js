import db from "../../database/db.js";

export async function getProducts() {
    return await db.products.toArray();
}

export async function addProduct(product) {

    await db.products.add(product);

}