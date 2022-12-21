import React, { useEffect } from "react";
import useCartStore from "../../../store/shoppingCartStore";
import SmallCard from "./SmallCard";

// https://tailwindui.com/components/ecommerce/components/shopping-carts

export default function ShoppingCart() {
    const items = useCartStore((state) => state.items);
    useEffect(() => {
        console.log(items);
    }, [items]);
    const total = useCartStore((state) => state.total);
    return (
        <div>
            <h1 className="text-4xl font-bold m-4 md:m-20">Shopping Cart</h1>
            {/* Item Overview */}
            <div className="flex flex-col-reverse lg:justify-center m-4  lg:flex-row md:m-20 lg:space-x-14">
                <div className="flex flex-col lg:w-[65%] ">
                    {items.map((item) => (
                        <div key={item.id}>
                            <SmallCard item={item} />
                        </div>
                    ))}
                </div>
                {/* Order summary */}
                <div className="flex flex-col lg:w-[35%] bg-blazePrimary50 px-6 py-10 rounded-lg space-y-4">
                    <h2 className="text-xl font-medium">Order summary</h2>
                    <div className="flex border-b-2 pb-2 justify-between">
                        <h3 className="font-light">Subtotal</h3>
                        <span>${total.toFixed(2)}</span>
                    </div>
                    <div className="flex border-b-2 pb-2 justify-between">
                        <h3 className="font-light">Shipping Estimate</h3>
                        <span>$0.00</span>
                    </div>
                    <div className="flex border-b-2 pb-2 justify-between">
                        <h3 className="font-light">Tax Estimate</h3>
                        <span>$0.00</span>
                    </div>
                    <div className="flex pb-2 justify-between">
                        <h3 className="font-bold">Order total</h3>
                        <span className="font-semibold">
                            ${total.toFixed(2)}
                        </span>
                    </div>
                    <button className="bg-blazeCTA rounded-lg h-14 text-white text-lg hover:opacity-80">
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    );
}
