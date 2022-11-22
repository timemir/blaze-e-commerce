import React, { useState } from "react";

export default function CategoriesAddForm() {
    const [added, setAdded] = useState(false);
    const [hint, setHint] = useState(false);
    const [category, setCategory] = useState("");

    function addHandler() {
        if (category.length === 0) {
            setHint(true);
            return;
        }
        setHint(false);
        // TODO: Create Category inside the database
        // Fetch API, catch errors, etc.

        setCategory("");
        setAdded(true);
        setTimeout(() => {
            setAdded(false);
        }, 2000);
    }
    function changeHandler(event) {
        setCategory(event.target.value);
    }

    return (
        <div className="flex flex-col space-y-5">
            <h1>Add a new Categorie</h1>
            {/* A form with a button to add a new categorie */}
            <form className="flex justify-start space-x-5">
                <input
                    className="flex-[10] px-2 rounded-lg"
                    type="text"
                    placeholder="Category Name"
                    value={category}
                    onChange={changeHandler}
                />

                <button
                    className="flex-[2] bg-blazeCTA rounded-lg p-1 text-blazePimary disabled:bg-gray-400"
                    type="submit"
                    onClick={addHandler}
                >
                    Add
                </button>
            </form>
            {added && (
                <span className="text-green-600 text-center">
                    Added a new category!
                </span>
            )}
            {hint && (
                <span className="text-red-600 text-center">
                    Please enter a category name!
                </span>
            )}
        </div>
    );
}
