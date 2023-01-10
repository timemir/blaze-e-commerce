import { BASE_URL } from "./config";

export async function getUserById(userId) {
    const reponse = await fetch(`${BASE_URL}/users/${userId}`);
    const user = await reponse.json();
    return user;
}

export async function getUsers() {
    const reponse = await fetch(`${BASE_URL}/users`);
    const users = await reponse.json();
    return users;
}
