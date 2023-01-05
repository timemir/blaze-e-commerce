/* eslint-disable no-unused-vars */
import { BASE_URL } from "./config";

// Function to fetch all items
export async function fetchItemsFromCategory(categoryId) {
    try {
        const response = await fetch(
            `${BASE_URL}/categories/${categoryId}/items`,
            {
                method: "GET",
            }
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return [
            { id: 1, title: "Error, check console", imageUrl: "", link: "/" },
        ];
    }
}
export async function fetchItem(itemId) {
    try {
        const response = await fetch(`${BASE_URL}/items/${itemId}`, {
            method: "GET",
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return {
            id: 1,
            title: "Error, check console",
            imageUrl: "",
            link: "/",
        };
    }
}

export async function deleteItem(itemId) {
    try {
        const response = await fetch(`${BASE_URL}/items/${itemId}`, {
            method: "DELETE",
        });
    } catch (error) {
        console.log(error);
    }
}

export async function uploadImage(File) {
    const formData = new FormData();
    formData.append(
        "upload_preset",
        import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
    );
    formData.append("file", File);
    formData.append("api_key", import.meta.env.VITE_CLOUDINARY_API_KEY);
    try {
        const response = await fetch(
            `https://api.cloudinary.com/v1_1/${
                import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
            }/image/upload`,
            {
                method: "POST",
                body: formData,
            }
        );
        const data = await response.json();
        return data.url;
    } catch (error) {
        console.log(error);
    }
}
