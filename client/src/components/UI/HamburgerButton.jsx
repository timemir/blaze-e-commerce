/* eslint-disable jsx-a11y/mouse-events-have-key-events */
// no onBlur, because it iterferes with the click event on the dropdown menu
import React, { useState } from "react";
import { BsXLg } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import NavLinks from "../Navbar/NavLinks";

export default function HamburgerButton() {
    const [isOpen, setIsOpen] = useState(false);
    function clickHandler() {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            {isOpen ? (
                <>
                    <BsXLg onClick={clickHandler} className="text-2xl" />
                    <div
                        className="bg-blazePimary absolute top-15 right-2 opacity-90 rounded-lg z-50"
                        onMouseOut={clickHandler}
                    >
                        <NavLinks col />
                    </div>
                </>
            ) : (
                <GiHamburgerMenu onClick={clickHandler} className="text-2xl" />
            )}
        </div>
    );
}
