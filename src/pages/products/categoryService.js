import db from "../../database/db.js";

export async function getCategories() {
    return await db.categories.toArray();
}

export async function addCategory(name) {

    const exists = await db.categories
        .where("name")
        .equalsIgnoreCase(name)
        .first();

    if (exists) {
        throw new Error("Category already exists.");
    }

    await db.categories.add({
        name
    });

}