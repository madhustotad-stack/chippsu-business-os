import "./products.css";

import { addCategory, getCategories } from "./categoryService.js";
import { addProduct, getProducts } from "./productService.js";
import { productForm } from "./productUI.js";

export async function renderProducts() {

    const body = document.querySelector(".dashboard-body");

    const categories = await getCategories();

    body.innerHTML = `

        <div class="products-page">

            <h1>Products</h1>

            <div class="category-toolbar">

                <input
                    id="categoryName"
                    type="text"
                    placeholder="Category Name">

                <button id="addCategoryBtn">

                    Add Category

                </button>

            </div>

            <div id="categoryList"></div>

            <hr>

            ${productForm(categories)}

            <div id="productList"></div>

        </div>

    `;

    document
        .getElementById("addCategoryBtn")
        .addEventListener("click", saveCategory);

    document
        .getElementById("saveProductBtn")
        .addEventListener("click", saveProduct);

    await loadCategories();

    await loadProducts();

}

async function saveCategory() {

    const input = document.getElementById("categoryName");

    const name = input.value.trim();

    if (!name) return;

    try {

        await addCategory(name);

        input.value = "";

        renderProducts();

    } catch (error) {

        alert(error.message);

    }

}

async function loadCategories() {

    const categories = await getCategories();

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

async function saveProduct() {

    const name = document.getElementById("productName").value.trim();

    const categoryId = Number(document.getElementById("productCategory").value);

    const price = Number(document.getElementById("productPrice").value);

    if (!name) {

        alert("Enter Product Name");

        return;

    }

    await addProduct({

        name,

        categoryId,

        price,

        isActive: true

    });

    await loadProducts();

}

async function loadProducts() {

    const products = await getProducts();

    const list = document.getElementById("productList");

    list.innerHTML = "<h2>Products</h2>";

    products.forEach(product => {

        list.innerHTML += `

            <div class="category-card">

                <strong>${product.name}</strong><br>

                ₹ ${product.price}

            </div>

        `;

    });

}