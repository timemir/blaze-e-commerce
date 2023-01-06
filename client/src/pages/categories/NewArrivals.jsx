import React from "react";
import { useLocation } from "react-router-dom";
import ItemList from "../../components/Shop/ItemList";

export default function NewArrivals() {
    const { state } = useLocation();

    return (
        <div>
            <ItemList category="New Arrivals" categoryId={state.data} />
        </div>
    );
}
