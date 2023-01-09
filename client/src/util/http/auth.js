import { BASE_URL } from "./config";

// Registers the user.
// params: user object
// returns {message}
export default async function register(user) {
    try {
        const response = await fetch(`${BASE_URL}/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: user.email.split("@")[0],
                email: user.email,
                password: user.password,
            }),
        });
        // const data = await response.json();
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return [{ status: "error", error: error.message }];
    }
}

// Logs in the user
// params: user object
// returns: {userId, username, email, roles, accessToken, refreshToken}
export async function login(user) {
    try {
        const response = await fetch(`${BASE_URL}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: user.email,
                password: user.password,
            }),
        });
        // const data = await response.json();
        // const data = await response.json();

        return response;
    } catch (error) {
        console.log(error);
        return [{ status: "error", error: error.message }];
    }
}

// Check Auth Status
// params: token
// returns: boolean
export function checkLoginStatus(refreshToken) {
    try {
        const response = fetch(`${BASE_URL}/auth/refreshToken`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                refreshToken,
            }),
        });
        return response;
    } catch (error) {
        console.log(error);
        return [{ status: "error", error: error.message }];
    }
}
