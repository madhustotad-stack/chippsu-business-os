export function productForm(categories) {

    return `

        <div class="product-form">

            <input
                id="productName"
                placeholder="Product Name">

            <select id="productCategory">

                ${categories.map(category => `

                    <option value="${category.id}">
                        ${category.name}
                    </option>

                `).join("")}

            </select>

            <input
                id="productPrice"
                type="number"
                placeholder="Selling Price">

            <button id="saveProductBtn">

                Save Product

            </button>

        </div>

    `;

}