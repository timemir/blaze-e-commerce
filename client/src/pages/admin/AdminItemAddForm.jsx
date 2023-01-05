import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { createItem, uploadImage } from "../../util/http/items";

export default function AdminItemAddForm() {
    const [brand, setBrand] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [imageAlt, setImageAlt] = useState("");
    const [size, setSize] = useState("XS");
    const [color, setColor] = useState("");
    const [colorTailwind, setColorTailwind] = useState("");
    const [imageSwitch, setImageSwitch] = useState(false);
    const { categoryId } = useParams();
    function handleUploadImage() {
        uploadImage(image)
            .then((res) => {
                console.log(res);
                setImage(res);
                setImageSwitch(true);
            })

            .catch((err) => {
                console.log("ERROR", err);
                setImageSwitch(false);
            });
    }
    function handleAddItem(e) {
        e.preventDefault();
        const item = {
            brand,
            name,
            price,
            description,
            images: [{ url: image, alt: imageAlt }],
            sizes: [{ name: size, inStock: true }],
            colors: [
                {
                    name: color,
                    class: `bg-${colorTailwind}`,
                    selectedClass: `ring-${colorTailwind}`,
                },
            ],
            available: true,
            rating: 0,
            sale: false,
            category: categoryId,
        };
        console.log(item);
        createItem(categoryId, item);
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
                        onChange={(e) => {
                            setPrice(e.target.value);
                        }}
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
                    {imageSwitch ? (
                        <img
                            className="w-32"
                            src={image}
                            alt="uploaded product"
                        />
                    ) : (
                        <input
                            placeholder="Upload image"
                            type="file"
                            name="image"
                            id="image"
                            onChange={(e) => {
                                setImage(e.target.files[0]);
                            }}
                        />
                    )}

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
                        className="rounded-lg bg-blazeCTA text-white p-1 mx-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
                        type="button"
                        onClick={handleUploadImage}
                        disabled={imageSwitch}
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
                            setSize(e.target.value);
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
                        onChange={(e) => {
                            setColorTailwind(e.target.value);
                        }}
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
