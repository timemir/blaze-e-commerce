import React from "react";
import useAuthStore from "../../../store/authStore";

// Hero Background Image is a tailwind background. "bg-hero-bg"
export default function Hero({ heroHeading, heroText, heroBtnText }) {
    const user = useAuthStore();
    function handleClick(e) {
        console.log(user.loginStatus);
    }
    return (
        <div
            id="hero"
            className="flex flex-col items-center space-y-8 justify-center h-screen px-6  bg-hero-bg bg-cover bg-center bg-fixed bg-blend-difference bg-blazePrimary800"
        >
            <h1 className="font-bold text-4xl md:text-6xl text-white">
                {heroHeading}
            </h1>
            <p className="text-md text-center md:max-w-3xl text-white">
                {heroText}
            </p>
            <button
                type="button"
                className="rounded-lg shadow-xl bg-blazeCTA p-4 font-bold text-white"
                onClick={handleClick}
            >
                {heroBtnText}
            </button>
        </div>
    );
}
