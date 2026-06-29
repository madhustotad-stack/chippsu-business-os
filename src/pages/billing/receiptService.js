export function generateReceipt(saleId, cart, paymentMode) {

    const now = new Date();

    return {

        billNo: String(saleId).padStart(6, "0"),

        date: now.toLocaleDateString(),

        time: now.toLocaleTimeString(),

        paymentMode,

        total: cart.reduce(
            (sum, item) => sum + (item.price * item.quantity),
            0
        ),

        items: cart.map(item => ({
            name: item.name,
            quantity: item.quantity,
            price: item.price
        }))

    };

}