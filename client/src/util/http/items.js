/* eslint-disable no-unused-vars */
import { BASE_URL } from "./config";

// Function to fetch all items
export async function fetchItemsFromCategory(categoryId) {
    try {
        const response = await fetch(
            `${BASE_URL}/category/${categoryId}/item`,
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
        const response = await fetch(`${BASE_URL}/item/${itemId}`, {
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
        const response = await fetch(`${BASE_URL}/item/${itemId}`, {
            method: "DELETE",
        });
    } catch (error) {
        console.log(error);
    }
}
