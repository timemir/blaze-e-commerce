import React, { useState } from "react";
import { uploadImage } from "../../util/http/items";

export default function AdminItemAddForm() {
    const [brand, setBrand] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [imageAlt, setImageAlt] = useState("");
    const [size, setSize] = useState("");
    const [color, setColor] = useState("");
    const [colorTailwind, setColorTailwind] = useState("");

    function handleUploadImage() {
        uploadImage(image)
            .then((res) => {
                console.log(res);
                setImage(res);
            })

            .catch((err) => {
                console.log("ERROR", err);
            });
    }
    function handleAddItem() {
        const item = {
            brand,
            name,
            price,
            description,
            image,
            imageAlt,
            size,
            color,
            colorTailwind,
        };
    }

    return (
        <form className="flex flex-col space-y-2">
            <div className="flex flex-col">
                <p>Brand</p>
                <label htmlFor="brand">
                    <input
                        placeholder="Enter Brand Name here..."
                        type="text"
                        name="brand"
                        id="brand"
                        onChange={(e) => {
                            setBrand(e.target.value);
                        }}
                    />
                </label>
            </div>
            <div className="flex flex-col">
                <p>Name</p>
                <label htmlFor="name">
                    <input
                        placeholder="Enter Name here..."
                        type="text"
                        name="name"
                        id="name"
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                </label>
            </div>
            <div className="flex flex-col">
                <p>Price</p>
                <label htmlFor="price">
                    <input
                        placeholder="Enter Price in € here..."
                        type="text"
                        name="price"
                        id="price"
                    />
                </label>
            </div>
            <div className="flex flex-col">
                <p>Description</p>
                <label htmlFor="description">
                    <input
                        placeholder="Enter a description here..."
                        type="text"
                        name="description"
                        id="description"
                        onChange={(e) => {
                            setDescription(e.target.value);
                        }}
                    />
                </label>
            </div>
            <div className="flex flex-col">
                <p>Image</p>
                <label htmlFor="image">
                    <input
                        placeholder="Upload image"
                        type="file"
                        name="image"
                        id="image"
                        onChange={(e) => {
                            setImage(e.target.files[0]);
                            console.log(e.target.files[0]);
                        }}
                    />

                    <input
                        placeholder="Alt Description"
                        type="url"
                        name="imageAlt"
                        id="imageAlt"
                        onChange={(e) => {
                            setImageAlt(e.target.value);
                        }}
                    />
                    <button
                        className="rounded-lg bg-blazeCTA text-white p-1 mx-2"
                        type="button"
                        onClick={handleUploadImage}
                    >
                        Upload Image
                    </button>
                </label>
            </div>
            <div className="flex flex-col">
                <p>Sizes</p>
                <label htmlFor="size">
                    <select
                        placeholder="Enter a size here..."
                        list="browsers"
                        name="size"
                        id="size"
                        onChange={(e) => {
                            console.log(e.target.value);
                        }}
                    >
                        <option value="XS"> XS </option>
                        <option value="S"> S </option>
                        <option value="M"> M </option>
                        <option value="L"> L </option>
                        <option value="XL"> XL </option>
                        <option value="XXL"> XXL </option>
                    </select>
                    <button
                        className="rounded-lg bg-blazeCTA text-white p-2 mx-2"
                        type="button"
                    >
                        +
                    </button>
                </label>
            </div>
            <div className="flex flex-col">
                <p>Colors</p>
                <label htmlFor="color">
                    <input
                        placeholder="Enter a color here..."
                        type="text"
                        name="color"
                        id="color"
                        onChange={(e) => {
                            setColor(e.target.value);
                        }}
                    />
                    <input
                        placeholder="Enter a tailwindCSS color here..."
                        type="text"
                        name="colorTailwind"
                        id="colorTailwind"
                    />
                    <button
                        className="rounded-lg bg-blazeCTA text-white p-2 mx-2"
                        type="button"
                    >
                        +
                    </button>
                </label>
            </div>
            <button
                className="rounded-lg p-2 text-white bg-blazeCTA text-lg"
                type="submit"
                onClick={handleAddItem}
            >
                Add Item
            </button>
        </form>
    );
}
