import React, { useEffect } from "react";
import useCartStore from "../../../store/shoppingCartStore";
import SmallCard from "./SmallCard";

// https://tailwindui.com/components/ecommerce/components/shopping-carts

export default function ShoppingCart() {
    const items = useCartStore((state) => state.items);
    useEffect(() => {
        console.log(items);
    }, [items]);

    return (
        <div>
            <h1>Shopping Cart</h1>
            {/* Item Overview */}
            <div className="md:m-20">
                {items.map((item) => (
                    <div key={item.id}>
                        <SmallCard item={item} />
                    </div>
                ))}
            </div>
            {/* Order summary */}
            <div />
        </div>
    );
}
