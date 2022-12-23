import React, { useEffect, useState } from "react";
import { fetchCategories } from "../../util/http/categories";
import Category from "./Category";

export default function CategoryList() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // Fetch categories from the backend
        (async () => {
            const fetchedCategories = await fetchCategories();
            setCategories(fetchedCategories);
            console.log(fetchedCategories);
        })();
    }, []);

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                    All Categories
                </h2>

                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {categories.map((category) => (
                        <Category key={category._id} category={category} />
                    ))}
                </div>
            </div>
        </div>
    );
}
