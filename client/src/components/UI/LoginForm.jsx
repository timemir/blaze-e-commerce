import React, { useState } from "react";

export default function LoginForm({ onPress }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    function usernameChangeHandler(event) {
        setUsername(event.target.value);
    }
    function passwordChangeHandler(event) {
        setPassword(event.target.value);
    }
    function submitHandler(event) {
        event.preventDefault();
        fetch("", {
            method: "POST",
            body: JSON.stringify({
                username: username,
                password: password,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (response.ok) {
                    onPress(true);
                    setError(false);
                    setUsername("");
                    setPassword("");
                } else {
                    throw new Error(
                        `${response.status} - ${response.statusText}`
                    );
                }
            })
            .catch((err) => {
                console.log(err.message);
                setError(true);
            });

        // Send the username and password to the server
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <form>
                <div className="flex flex-col justify-center items-center space-y-4">
                    <h1 className="text-3xl font-bold">Admin Login</h1>
                    {error && (
                        <h3 className="text-red-500">
                            Something went wrong. Try again.
                        </h3>
                    )}
                    <label htmlFor="username">
                        Username
                        <input
                            id="username"
                            type="text"
                            value={username}
                            placeholder="Username"
                            className="border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blazeCTA"
                            onChange={usernameChangeHandler}
                        />
                    </label>
                    <label htmlFor="password">
                        Password
                        <input
                            id="password"
                            type="password"
                            value={password}
                            placeholder="Password"
                            className="border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blazeCTA"
                            onChange={passwordChangeHandler}
                        />
                    </label>
                    <button
                        className="bg-blazeCTA text-white px-4 py-2 rounded-md"
                        type="submit"
                        onClick={submitHandler}
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
}
