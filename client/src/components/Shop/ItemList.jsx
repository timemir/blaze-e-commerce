import React, { useEffect, useState } from "react";
import { AiFillDashboard } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { fetchItemsFromCategory } from "../../util/http/items";
import Item from "./Item";

export default function ItemList({ category }) {
    const [items, setItems] = useState([]);
    const location = useLocation();
    useEffect(() => {
        async function getItems() {
            const response = await fetchItemsFromCategory(location.state.data);
            setItems(response);
        }
        getItems();
    }, [location.state.data]);

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                    {category}
                </h2>

                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {items.map((item) => (
                        <Item key={item._id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}
