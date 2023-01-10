import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/UI/General/Button";

export default function NotFound() {
    return (
        <div className="flex flex-col h-screen justify-center items-center px-4 lg:px-0">
            <div>
                <div className="flex space-x-4">
                    <h1 className="text-6xl font-bold text-blazeCTA border-r-2 pr-2">
                        404
                    </h1>
                    <div className="flex flex-col">
                        <h2 className="text-5xl font-bold">Page not found</h2>
                        <p className="text-gray-400">
                            Please check the URL in the adress bar and try again
                        </p>
                    </div>
                </div>
                <div className="flex mt-8 space-x-4 justify-end mr-14">
                    <button
                        type="button"
                        className="text-white w-40 px-1 bg-blazeCTA rounded-lg transition hover:opacity-80"
                    >
                        <Link to="/">Go back Home</Link>{" "}
                    </button>
                    <button
                        type="button"
                        className="border-2 w-36 border-blazeCTA px-1 text-blazePimary rounded-lg transition hover:bg-blazeCTA hover:text-white"
                    >
                        Contact support
                    </button>
                </div>
            </div>
        </div>
    );
}
