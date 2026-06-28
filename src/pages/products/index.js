import "./products.css";

import { addCategory, getCategories } from "./categoryService.js";
import {
    addProduct,
    getProducts,
    deleteProduct,
    getProduct,
    updateProduct
} from "./productService.js";
import { productForm } from "./productUI.js";
let editingProductId = null;

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

    const product = {
        name,
        categoryId,
        price,
        isActive: true
    };

    if (editingProductId === null) {

        await addProduct(product);

    } else {

        await updateProduct(editingProductId, product);

        editingProductId = null;

        document.getElementById("saveProductBtn").textContent = "Save Product";

    }

    document.getElementById("productName").value = "";
    document.getElementById("productPrice").value = "";

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

                <br><br>

                <button
                    class="edit-product"
                    data-id="${product.id}">
                    Edit
                </button>

                <button
                    class="delete-product"
                    data-id="${product.id}">
                    Delete
                </button>

            </div>

        `;

    });

    document.querySelectorAll(".delete-product").forEach(button => {

        button.addEventListener("click", async () => {

            if (!confirm("Delete this product?")) return;

            await deleteProduct(Number(button.dataset.id));

            await loadProducts();

        });

    });

    document.querySelectorAll(".edit-product").forEach(button => {

        button.addEventListener("click", async () => {

            const product = await getProduct(Number(button.dataset.id));

            editingProductId = product.id;

            document.getElementById("productName").value = product.name;
            document.getElementById("productCategory").value = product.categoryId;
            document.getElementById("productPrice").value = product.price;

            document.getElementById("saveProductBtn").textContent = "Update Product";

        });

    });

}