/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AuthForm({ type }) {
    const [valError, setValError] = useState("");

    // Validate email and password
    function validateParams(params) {
        if (params.email !== params.confirmEmail) {
            setValError("Emails do not match");
            return false;
        }
        if (params.password !== params.confirmPassword) {
            setValError("Passwords do not match");
            return false;
        }
        if (params.password.length < 6) {
            setValError("Password must be at least 6 characters");
            return false;
        }
        return true;
    }

    // Handle form submit
    function handleSubmit(event) {
        event.preventDefault();
        setValError("");
        const params = {
            email: event.target.email.value,
            password: event.target.password.value,
        };
        if (type === "register") {
            params.confirmEmail = event.target["confirm-email"].value;
            params.confirmPassword = event.target["confirm-password"].value;
            if (validateParams(params)) {
                return console.log("register", params);
            }
            return console.log(valError);
        }
        return console.log("login", params);
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col bg-blazePrimary100 w-full py-5 px-1 md:p-5 rounded-lg space-y-4"
        >
            <div className="flex flex-col font-light text-sm">
                <label htmlFor="email">Email address</label>
                <input
                    className="rounded-md border-2 h-8"
                    type="email"
                    name=""
                    id="email"
                />
                {type === "register" && (
                    <>
                        <label htmlFor="email">Confirm email address</label>
                        <input
                            className="rounded-md border-2 h-8"
                            type="email"
                            name="confirm-email"
                            id="confirm-email"
                        />
                    </>
                )}
                <label className="mt-4" htmlFor="password">
                    Password
                </label>
                <input
                    className="rounded-md border-2 h-8"
                    type="password"
                    name="password"
                    id="password"
                />
                <label className="" htmlFor="password">
                    Confirm password
                </label>
                <input
                    className="rounded-md border-2 h-8"
                    type="password"
                    name="confirm-password"
                    id="confirm-password"
                />
            </div>
            {type === "login" && (
                <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row items-center justify-between">
                    <label
                        className="flex items-center text-sm font-light"
                        htmlFor="remember"
                    >
                        <input
                            className="mr-1 h-4 w-4"
                            type="checkbox"
                            name=""
                            id="remember"
                        />
                        Remember me
                    </label>
                    <Link className="text-blazeCTA text-sm" to="/">
                        Forgot your password?
                    </Link>
                </div>
            )}
            <div className="font-bold text-red-500 text-center">{valError}</div>
            <div className="flex">
                <button
                    className="bg-blazeCTA text-white w-full rounded-lg p-2"
                    type="submit"
                >
                    {type === "login" ? "Sign in" : "Create account"}
                </button>
            </div>
        </form>
    );
}
