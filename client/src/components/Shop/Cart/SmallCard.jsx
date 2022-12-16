import React from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import useCartStore from "../../../store/shoppingCartStore";

export default function SmallCard({ item }) {
    const removeItem = useCartStore((state) => state.removeItem);
    const deleteItem = useCartStore((state) => state.deleteItem);
    const addItem = useCartStore((state) => state.addItem);
    function removeHandler() {
        // Remove item from cart
        removeItem(item);
    }
    function deleteHandler() {
        deleteItem(item);
    }
    function addHandler() {
        addItem(item);
    }

    return (
        <div className="flex flex-row m-2 pb-6 border-b-2">
            {/* Picture */}
            <div className="pr-2 py-2 my-auto">
                <img
                    className="w-44 border rounded-lg overflow-hidden"
                    src={item.image || "https://via.placeholder.com/150"}
                    alt=""
                />
            </div>
            {/* Info */}
            <div className="flex flex-col justify-between mr-1 md:mr-4">
                <div>
                    <h2 className="font-bold">{item.name}</h2>
                    <p className="mb-4 font-light">{item.brand}</p>
                </div>
                <div className="flex flex-row items-center space-x-2">
                    <p className="text-md font-light">Qty {item.quantity}</p>
                    <AiOutlinePlusCircle
                        onClick={addHandler}
                        className="text-lg text-blazeCTA hover:text-green-500 ml-2"
                    />
                    <AiOutlineMinusCircle
                        onClick={removeHandler}
                        className="text-lg text-blazeCTA hover:text-red-500 ml-2"
                    />
                </div>
            </div>
            {/* Price and Button */}
            <div className="flex flex-col justify-between">
                <p>${item.price}</p>
                <button
                    type="button"
                    className="text-blazeCTA hover:text-red-500"
                    onClick={deleteHandler}
                >
                    Remove
                </button>
            </div>
        </div>
    );
}
