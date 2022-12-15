import React from "react";

export default function Button({
    outline = false,
    type,
    children,
    className,
    onClick,
}) {
    return (
        <button
            className={`w-28 h-8 text-center rounded-lg hover:opacity-80 ${
                outline
                    ? "bg-transparent transition hover:text-blazeCTA"
                    : "bg-blazeCTA"
            } ${className}`}
            type={type || "button"}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
