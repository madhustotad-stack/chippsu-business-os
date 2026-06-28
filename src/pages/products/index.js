import "./products.css";
import db from "../../database/db.js";

export async function renderProducts() {

    const container = document.querySelector(".dashboard-body");

if (!container) {
    console.error("dashboard-body not found");
    return;
}

container.innerHTML = `

        <div class="products-page">

            <h1>Category Management</h1>

            <div class="category-toolbar">

                <input
                    id="categoryName"
                    type="text"
                    placeholder="Enter Category Name">

                <button id="addCategoryBtn">
                    Add Category
                </button>

            </div>

            <div id="categoryList"></div>

        </div>

    `;

    document
        .getElementById("addCategoryBtn")
        .addEventListener("click", addCategory);

    loadCategories();

}

async function addCategory() {

    const input = document.getElementById("categoryName");

    const name = input.value.trim();

    if (!name) return;

    await db.categories.add({
        name
    });

    input.value = "";

    loadCategories();

}

async function loadCategories() {

    const categories = await db.categories.toArray();

    const list = document.getElementById("categoryList");

    list.innerHTML = "";

    categories.forEach(category => {

        list.innerHTML += `

            <div class="category-card">

                ${category.name}

            </div>

        `;

    });

}