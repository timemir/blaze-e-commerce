import React, { useState } from "react";

export default function CategoriesAddForm({ getMessage }) {
    const [category, setCategory] = useState("");

    function messageHandler(type, text) {
        const messageObj = { type, text };
        getMessage(messageObj);
    }
    function addHandler(e) {
        e.preventDefault();
        if (category.length === 0) {
            messageHandler("Error", "Please enter a category.");
            return;
        }
        fetch("http://localhost:3000/category", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: category,
            }),
        })
            .then((res) => {
                if (res.status === 200) {
                    setCategory("");
                    messageHandler("Success", "Category added successfully.");
                }
            })
            .catch((err) => {
                console.log(err);
                messageHandler("Error", err.message);
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
        </div>
    );
}
