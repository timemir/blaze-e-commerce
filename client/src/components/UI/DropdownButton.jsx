import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function DropdownButton({ label }) {
    // TODO: Implement dropdown menu logic
    const [isOpen, setIsOpen] = useState(false);
    function toggleHandler() {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <div className="flex items-center relative z-50" />
            <div className="relative inline-block text-left">
                <div onMouseOver={toggleHandler} onFocus={toggleHandler}>
                    <button
                        type="button"
                        className="inline-flex w-full justify-center items-center rounded-md px-4 py-2 "
                        id="menu-button"
                        aria-expanded="true"
                        aria-haspopup="true"
                        onClick={toggleHandler}
                    >
                        {label}
                        <BsChevronDown />
                    </button>
                </div>

                <div
                    className={`${
                        isOpen ? "" : "hidden"
                    } absolute right-0 z-10 mt-2 w-56 origin-top-left md:origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1"
                    onMouseLeave={toggleHandler}
                >
                    <div className="py-1" role="none">
                        <Link
                            className="text-gray-700 block px-4 py-2 text-sm transition hover:bg-gray-100 hover:text-blazeCTA"
                            to="/all-categories"
                            onClick={toggleHandler}
                        >
                            All Categories
                        </Link>

                        <Link
                            className="text-gray-700 block px-4 py-2 text-sm transition hover:bg-gray-100 hover:text-blazeCTA"
                            to="/"
                            onClick={toggleHandler}
                        >
                            All Categories
                        </Link>
                        <Link
                            className="text-gray-700 block px-4 py-2 text-sm transition hover:bg-gray-100 hover:text-blazeCTA"
                            to="/"
                            onClick={toggleHandler}
                        >
                            All Categories
                        </Link>
                        <Link
                            className="text-gray-700 block px-4 py-2 text-sm transition hover:bg-gray-100 hover:text-blazeCTA"
                            to="/"
                            onClick={toggleHandler}
                        >
                            All Categories
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
