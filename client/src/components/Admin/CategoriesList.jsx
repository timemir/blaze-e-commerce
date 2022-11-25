import React, { useEffect, useState } from "react";
import { fetchCategories } from "../../util/http/categories";
import CategoriesListItem from "./CategoriesListItem";

export default function CategoriesList() {
    const [categories, setCategories] = useState([{ id: 1 }]);

    useEffect(() => {
        (async () => {
            const fetchedCategories = await fetchCategories();
            setCategories(fetchedCategories);
        })();
    }, []);
    function optimisticUpdate(categoryId) {
        // Delete the category from the list
        setCategories(categories.filter((c) => c._id !== categoryId));
    }

    return (
        <div className="flex flex-col space-y-2">
            {categories.map((category) => (
                <CategoriesListItem
                    key={category._id}
                    updateParent={optimisticUpdate}
                    category={category}
                />
            ))}
        </div>
    );
}
