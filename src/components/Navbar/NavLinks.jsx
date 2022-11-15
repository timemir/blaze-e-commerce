import React from "react";
import DropdownButton from "../UI/DropdownButton";

export default function NavLinks() {
    return (
        <div className="flex justify-center items-center py-2px px-14px space-x-5">
            <a href="" className="transition hover:text-blazeCTA">
                Home
            </a>
            <a href="" className="transition hover:text-blazeCTA">
                <DropdownButton label={"Shop"} />
            </a>
            <a href="" className="transition hover:text-blazeCTA">
                Support
            </a>
            <a href="" className="transition hover:text-blazeCTA">
                Blog
            </a>
        </div>
    );
}
