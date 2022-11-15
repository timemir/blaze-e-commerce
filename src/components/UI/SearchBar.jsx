import React from "react";
import { IoSearchOutline } from "react-icons/io5";

export default function SearchBar() {
    return (
        <div className="flex justify-center items-center rounded-xl py-1px pr-13px pl-1  text-blazePrimary200 bg-white ">
            <IoSearchOutline color="#B4B9C1" />
            <input
                type="text"
                className="text-blazePimary w-28 h-6 px-1 transition focus:w-48 focus:outline-none rounded-xl focus:placeholder-transparent"
                placeholder="Search..."
                name="searchfield"
                id="searchfield"
            />
        </div>
    );
}
