import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchItem } from "../../util/http/items";

export default function AdminItemDetails() {
    const [item, setItem] = useState({});
    const location = useLocation();
    const itemId = location.pathname.split("/")[4];

    useEffect(() => {
        (async () => {
            const fetchedItem = await fetchItem(itemId);
            setItem(fetchedItem);
        })();
    }, [itemId]);
    return (
        <div>
            {item.brand} {item.name}
        </div>
    );
}
