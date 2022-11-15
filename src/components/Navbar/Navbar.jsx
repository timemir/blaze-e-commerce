import React from "react";
import Logo from "../../assets/images/icons/icon small.svg";
import Button from "../UI/Button";
import SearchBar from "../UI/SearchBar";
import NavLinks from "./NavLinks";
export default function Navbar() {
	return (
		<div className="flex justify-between items-center text-white h-14 rounded-b-lg px-16 bg-blazePimary">
			{/* Logo */}
			<div className="w-6">
				<a href="">
					<img src={Logo} alt="" />
				</a>
			</div>
			{/* Links */}
			<NavLinks />
			<div className="flex justify-center items-center space-x-2">
				<SearchBar />
				<Button label="Register" />
				<Button label="Login" outline={true} />
			</div>
		</div>
	);
}
