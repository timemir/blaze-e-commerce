import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ItemsList from "../../components/Admin/ItemsList";
import { fetchCategory } from "../../util/http/categories";
import AdminItemAddForm from "./AdminItemAddForm";

export default function AdminCategoryDetails() {
    const [category, setCategory] = useState({});
    const location = useLocation();
    const categoryId = location.pathname.split("/")[2];

    useEffect(() => {
        (async () => {
            const fetchedCategory = await fetchCategory(categoryId);
            setCategory(fetchedCategory);
        })();
    }, [categoryId]);
    return (
        <div>
            <div className="flex flex-col items-center p-10">
                <h1 className="text-4xl font-bold text-blazeCTA">
                    {category.title}
                </h1>
                <span className="text-gray-400 text-sm">Category</span>
            </div>
            <div className="flex flex-col p-8">
                <div>
                    <h2 className="text-md font-semibold border-b-2">
                        Add a new Item to this Category{" "}
                    </h2>
                    <AdminItemAddForm />
                </div>
                <div>
                    <h2 className="text-md font-semibold border-b-2">
                        All Items inside this Category
                    </h2>
                    <div>
                        <ItemsList categoryId={categoryId} />
                    </div>
                </div>
            </div>
        </div>
    );
}
