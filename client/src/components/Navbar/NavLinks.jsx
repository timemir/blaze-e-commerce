import React from "react";
import { Link } from "react-router-dom";
import DropdownButton from "../UI/DropdownButton";

export default function NavLinks() {
    return (
        // react router link to some page

        <div className="flex justify-center items-center py-2px px-14px space-x-5">
            <div className="transition hover:text-blazeCTA">
                <Link to="/">Home</Link>
            </div>
            <div className="transition hover:text-blazeCTA">
                <DropdownButton label="Shop" linkTo="/all-categories" />
            </div>
            <div className="transition hover:text-blazeCTA">
                <Link to="/">Support</Link>
            </div>
            <div className="transition hover:text-blazeCTA">
                <Link to="/">Blog</Link>
            </div>
        </div>
    );
}
