import React from "react";

export default function Button({ outline = false, children, className }) {
    return (
        <button
            className={`w-28 h-8 text-center text-white  rounded-lg hover:opacity-80 ${
                outline
                    ? "bg-transparent transition hover:text-blazeCTA"
                    : "bg-blazeCTA"
            } ${className}`}
            type="button"
        >
            {children}
        </button>
    );
}
