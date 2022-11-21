import React, { useEffect, useState } from "react";
import Item from "./Item";

export default function ItemList() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        // TODO: Fetch items from backend
        setItems([
            {
                id: 1,
                brand: "Pottery",
                name: "Plant Pot 3000 - White - modern design dasdasdas",
                price: 39.99,
                description: "Nice pot yeee",
                sale: true,
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
