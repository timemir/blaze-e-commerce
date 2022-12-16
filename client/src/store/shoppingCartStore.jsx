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
                // Add the state to the local storage
                localStorage.setItem("cart", JSON.stringify(state));
                return {
                    ...state,
                    total: state.total + item.price,
                };
            }
            // Add the new item to the cart
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
                    return {
                        items: newItems,
                        total: state.total - item.price,
                    };
                }
                // Update the total price
                return {
                    ...state,
                    total: state.total - item.price,
                };
            }
            return state;
        }),
}));

export default useCartStore;
