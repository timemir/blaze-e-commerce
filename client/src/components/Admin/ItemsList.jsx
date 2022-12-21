import React, { useEffect, useState } from "react";
import { fetchItemsFromCategory } from "../../util/http/items";
import ItemsListItem from "./ItemsListItem";

export default function ItemsList({ categoryId }) {
    const [items, setItems] = useState([{ _id: 1, title: "xd" }]);

    useEffect(() => {
        (async () => {
            const fetchedItems = await fetchItemsFromCategory(categoryId);
            setItems(fetchedItems);
        })();
    }, [categoryId]);
    function optimisticUpdate(itemId) {
        // Delete the category from the list
        setItems(items.filter((i) => i._id !== itemId));
    }

    return (
        <div className="flex flex-col space-y-2">
            {items.map((item) => (
                <ItemsListItem
                    key={item._id}
                    updateParent={optimisticUpdate}
                    item={item}
                    categoryId={categoryId}
                />
            ))}
        </div>
    );
}
