import db from "../../database/db.js";

export async function getProducts() {
    return await db.products.toArray();
}

export async function getProduct(id) {
    return await db.products.get(id);
}

export async function addProduct(product) {
    return await db.products.add(product);
}

export async function updateProduct(id, product) {
    return await db.products.update(id, product);
}

export async function deleteProduct(id) {
    return await db.products.delete(id);
}