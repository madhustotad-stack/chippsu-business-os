import db from "../../database/db.js";

export async function saveSale(cart, paymentMode) {

    if (cart.length === 0) {

        throw new Error("Cart is empty.");

    }

    const now = new Date();

    const saleId = await db.sales.add({

        date: now.toLocaleDateString(),

        time: now.toLocaleTimeString(),

        total: cart.reduce(
            (sum, item) => sum + (item.price * item.quantity),
            0
        ),

        paymentMode

    });

    for (const item of cart) {

        await db.saleItems.add({

            saleId,

            productId: item.id,

            quantity: item.quantity,

            price: item.price

        });

    }

    return saleId;

}