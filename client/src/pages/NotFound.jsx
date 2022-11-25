import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/UI/General/Button";

export default function NotFound() {
    return (
        <div className="flex flex-col h-screen justify-center items-center">
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
            <div className="mt-8 space-x-4 ">
                <Button className=" w-max px-1">
                    <Link to="/">Go back Home</Link>{" "}
                </Button>
                <Button
                    outline
                    className="border-2 border-blazeCTA w-max px-1 text-blazePimary"
                >
                    Contact support
                </Button>
            </div>
        </div>
    );
}
