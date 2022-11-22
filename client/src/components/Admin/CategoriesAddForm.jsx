import React, { useState } from "react";

export default function CategoriesAddForm() {
    const [added, setAdded] = useState(false);
    const [hint, setHint] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [category, setCategory] = useState("");

    function addHandler(e) {
        e.preventDefault();
        if (category.length === 0) {
            setHint(true);
            return;
        }
        setHint(false);
        fetch("http://localhost:3000/create-category", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: category,
            }),
        })
            .then((res) => {
                if (res.status === 200) {
                    setAdded(true);
                    setCategory("");
                    setTimeout(() => {
                        setAdded(false);
                    }, 2000);
                }
            })
            .catch((err) => {
                console.log(err);
                setHint(true);
                setErrorMessage(`Error: ${err.message}!`);
            });
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
                    {errorMessage || "Please enter a category name!"}
                </span>
            )}
        </div>
    );
}
