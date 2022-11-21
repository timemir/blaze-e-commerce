import React, { useEffect, useState } from "react";
import Item from "./Item";

export default function ItemList() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        // TODO: Fetch items from backend
        setItems([
            {
                id: 1,
                brand: "Harry Potterly",
                name: "Plant Pot 3000 - White - modern design dasdasdas",
                price: 39.99,
                description: "Nice pot yeee",
                image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80",
                sale: true,
            },
            {
                id: 2,
                brand: "Harry Potterly",
                name: "Plant Pot 4000 - White - modern design dasdasdas",
                price: 49.99,
                description: "Nice pot yeee",
                image: "https://images.unsplash.com/photo-1511517099458-7346484896f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
                sale: false,
            },
        ]);
    }, []);

    return (
        <div>
            {items.map((item) => (
                <Item key={item.id} item={item} />
            ))}
        </div>
    );
}
