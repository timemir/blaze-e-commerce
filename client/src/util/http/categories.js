/* eslint-disable no-unused-vars */
import { BASE_URL } from "./config";
// Function to fetch all categories
export async function fetchCategories() {
    try {
        const response = await fetch(`${BASE_URL}/all-categories`, {
            method: "GET",
        });
        // const data = await response.json();
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return [
            { id: 1, title: "Error, check console", imageUrl: "", link: "/" },
        ];
    }
}

export async function fetchCategory(title) {}

export async function deleteCategory(categoryId) {
    try {
        const response = await fetch(`${BASE_URL}/category/${categoryId}`, {
            method: "DELETE",
        });
    } catch (error) {
        console.log(error);
    }
}
