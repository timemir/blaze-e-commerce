import create from "zustand";

// Initial state
const initialState = {
    items: [],
    total: 0,
};
// get initial state from local storage
if (typeof window !== "undefined") {
    const cart = localStorage.getItem("cart");
    if (cart) {
        initialState.items = JSON.parse(cart).items;
        initialState.total = JSON.parse(cart).total;
    }
}

// Store
const useCartStore = create((set) => ({
    ...initialState,
    // Mutations
    addItem: (item) =>
        set((state) => {
            const existingItem = state.items.find((i) => i.id === item.id);
            if (existingItem) {
                // Increase the quantity of the existing item
                existingItem.quantity++;
                const newTotal = state.total + item.price;

                // Add the state and total to the local storage
                localStorage.setItem(
                    "cart",
                    JSON.stringify({ ...state, total: newTotal })
                );
                return {
                    ...state,
                    total: newTotal,
                };
            }
            // Add the new item to the cart and local storage
            localStorage.setItem(
                "cart",
                JSON.stringify({
                    items: [...state.items, { ...item, quantity: 1 }],
                    total: state.total + item.price,
                })
            );
            return {
                items: [...state.items, { ...item, quantity: 1 }],
                total: state.total + item.price,
            };
        }),
    removeItem: (item) =>
        set((state) => {
            const existingItem = state.items.find((i) => i.id === item.id);
            if (existingItem) {
                // Decrease the quantity of the existing item
                existingItem.quantity--;
                if (existingItem.quantity === 0) {
                    // Remove the item from the cart if the quantity is 0
                    const index = state.items.indexOf(item);
                    const newItems = [
                        ...state.items.slice(0, index),
                        ...state.items.slice(index + 1),
                    ];
                    // update the local storage
                    localStorage.setItem(
                        "cart",
                        JSON.stringify({
                            items: newItems,
                            total: state.total - item.price,
                        })
                    );
                    return {
                        items: newItems,
                        total: state.total - item.price,
                    };
                }
                // Update the total price and local storage
                localStorage.setItem(
                    "cart",
                    JSON.stringify({
                        ...state,
                        total: state.total - item.price,
                    })
                );
                return {
                    ...state,
                    total: state.total - item.price,
                };
            }
            return state;
        }),
    deleteItem: (item) =>
        set((state) => {
            const existingItem = state.items.find((i) => i.id === item.id);
            if (existingItem) {
                // Remove the item from the cart
                const index = state.items.indexOf(item);
                const newItems = [
                    ...state.items.slice(0, index),
                    ...state.items.slice(index + 1),
                ];
                // update the local storage
                localStorage.setItem(
                    "cart",
                    JSON.stringify({
                        items: newItems,
                        total: state.total - item.price * item.quantity,
                    })
                );
                return {
                    items: newItems,
                    total: state.total - item.price * item.quantity,
                };
            }
            return state;
        }),
}));

export default useCartStore;
