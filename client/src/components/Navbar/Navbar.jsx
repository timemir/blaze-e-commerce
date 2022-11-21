import React from "react";
import { CgProfile } from "react-icons/cg";
import Logo from "../../assets/images/icons/iconTrans.png";
import Button from "../UI/Button";
import HamburgerButton from "../UI/HamburgerButton";
import SearchBar from "../UI/SearchBar";
import NavLinks from "./NavLinks";
// import react icons

export default function Navbar() {
    return (
        <div className="flex justify-between items-center text-white h-14 rounded-b-lg px-16 bg-blazePimary">
            {/* Logo */}
            <div className="w-9">
                <a href="../../../index.html">
                    <img src={Logo} alt="" />
                </a>
            </div>
            {/* Links */}
            <div className="hidden md:flex">
                <NavLinks />
            </div>
            {/* Buttons */}
            <div className="hidden md:flex justify-center items-center space-x-2">
                <SearchBar />
                <Button label="Register" />
                <Button label="Login" outline />
            </div>
            {/* Mobile View */}
            <div className=" flex space-x-3 md:hidden">
                {/* //TODO: Make avatar component */}
                <CgProfile className="text-2xl" />
                <HamburgerButton />
            </div>
        </div>
    );
}
