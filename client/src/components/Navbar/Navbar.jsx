import { Avatar } from "@boringer-avatars/react";
import React from "react";
import { AiOutlineLogout, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/icons/iconTrans.png";
import useAuthStore from "../../store/authStore";
import useCartStore from "../../store/shoppingCartStore";
import Button from "../UI/General/Button";
import HamburgerButton from "../UI/General/HamburgerButton";
import SearchBar from "../UI/General/SearchBar";
import NavLinks from "./NavLinks";

// import react icons

export default function Navbar() {
    const user = useAuthStore();
    const cart = useCartStore();
    function handleLogout() {
        user.logout();
    }
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
                {!user.loginStatus ? (
                    <>
                        <Link to="/register">
                            <Button>Register</Button>
                        </Link>
                        <Link to="/login">
                            <Button outline> Login </Button>
                        </Link>
                    </>
                ) : (
                    <>
                        <Link to="/profile">
                            <Avatar
                                title={false}
                                size={35}
                                variant="beam"
                                name={user.userId}
                                square={false}
                                colors={[
                                    "#29BCB7",
                                    "#009D94",
                                    "#059165",
                                    "#48BE91",
                                    "#3A3E45", // Face
                                ]}
                            />
                        </Link>
                        <Link className="relative" to="/cart">
                            <AiOutlineShoppingCart className="text-2xl  transition hover:text-blazeCTA" />
                            {cart.items.length !== 0 && (
                                <div className="flex justify-center items-center absolute -top-2 -right-1 rounded-full bg-red-500 w-4 h-4 text-sm">
                                    {cart.items.length}
                                </div>
                            )}
                        </Link>
                        <AiOutlineLogout
                            className="text-2xl transition hover:text-red-500"
                            onClick={handleLogout}
                        />
                    </>
                )}
            </div>
            {/* Mobile View */}
            <div className=" flex space-x-3 md:hidden">
                <Link to="/profile">
                    {user.loginStatus && (
                        <Avatar
                            title={false}
                            size={35}
                            variant="beam"
                            name={user.userId}
                            square={false}
                            colors={[
                                "#29BCB7",
                                "#009D94",
                                "#059165",
                                "#48BE91",
                                "#3A3E45", // Face
                            ]}
                        />
                    )}
                </Link>
                <HamburgerButton />
            </div>
        </div>
    );
}
