import React from "react";

export default function AdminItemAddForm() {
    return (
        <form className="flex flex-col space-y-2 ">
            <label htmlFor="brand">
                <input
                    placeholder="Brand"
                    type="text"
                    name="brand"
                    id="brand"
                />
            </label>
            <label htmlFor="name">
                <input placeholder="Name" type="text" name="name" id="name" />
            </label>
            <label htmlFor="price">
                <input
                    placeholder="Price in €"
                    type="text"
                    name="price"
                    id="price"
                />
            </label>
            <label htmlFor="description">
                <input
                    placeholder="Description"
                    type="text"
                    name="description"
                    id="description"
                />
            </label>
            <label htmlFor="image">
                <input
                    placeholder="Image url"
                    type="url"
                    name="image"
                    id="image"
                />
                <input
                    placeholder="Alt Description"
                    type="url"
                    name="imageAlt"
                    id="imageAlt"
                />
            </label>
            <label htmlFor="size">
                <input
                    placeholder="Size name"
                    type="text"
                    name="size"
                    id="size"
                />
                <input
                    placeholder="Size inStock? true/false"
                    type="checkbox"
                    name="sizeStock"
                    id="sizeStock"
                />
            </label>
            <label htmlFor="color">
                <input
                    placeholder="color name"
                    type="text"
                    name="color"
                    id="color"
                />
                <input
                    placeholder="color tailwind css"
                    type="text"
                    name="colorTailwind"
                    id="colorTailwind"
                />
            </label>
            <button type="submit">Add</button>
        </form>
    );
}
