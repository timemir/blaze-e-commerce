import React, { useEffect, useState } from "react";
import Item from "./Item";

export default function ItemList({ category }) {
    const [items, setItems] = useState([]);
    useEffect(() => {
        // TODO: Fetch items from backend
        setItems([
            {
                id: 1,
                href: "#",
                brand: "Harry Potterly",
                name: "Plant Pot 3000 - White - modern design dasdasdas",
                price: 39.99,
                description: "Nice pot yeee",
                image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80",
                imageAlt:
                    "White and green ceramic plant pot with drainage holes.",
                sale: true,
                color: "white",
            },
            {
                id: 2,
                href: "#",
                brand: "Harry Potterly",
                name: "Plant Pot 4000 - White - modern design dasdkasda",
                price: 49.99,
                description: "Nice pot yeee",
                image: "https://images.unsplash.com/photo-1511517099458-7346484896f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
                imageAlt:
                    "White and green ceramic plant pot with drainage holes.",
                sale: false,
                color: "white",
            },
        ]);
    }, []);

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                    {category}
                </h2>

                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {items.map((item) => (
                        <Item key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}
