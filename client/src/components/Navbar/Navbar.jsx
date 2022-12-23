import React from "react";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/icons/iconTrans.png";
import Button from "../UI/General/Button";
import HamburgerButton from "../UI/General/HamburgerButton";
import SearchBar from "../UI/General/SearchBar";
import NavLinks from "./NavLinks";
// import react icons

export default function Navbar() {
    return (
        <div className="flex justify-between items-center text-white h-14 rounded-b-lg px-16 bg-blazePimary z-50">
            {/* Logo */}
            <div className="w-9">
                <Link to="/">
                    <img src={Logo} alt="" />
                </Link>
            </div>
            {/* Links */}
            <div className="hidden md:flex">
                <NavLinks />
            </div>
            {/* Buttons */}
            <div className="hidden md:flex justify-center items-center space-x-2">
                <SearchBar />
                <Link to="/register">
                    <Button>Register</Button>
                </Link>
                <Link to="/login">
                    <Button outline> Login </Button>
                </Link>
                <Link to="/cart">
                    <CgProfile className="text-2xl" />
                </Link>
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
