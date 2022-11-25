import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    function newsletterHandler(event) {
        event.preventDefault();
        console.log("Newsletter");
    }
    return (
        <div
            id="footer"
            className="flex flex-col bg-blazePimary rounded-t-lg text-[#B4B9C2] w-full justify-between  pt-10 pb-8"
        >
            <div
                id="columns"
                className="flex flex-wrap md:flex-nowrap md:flex-row md:space-x-4  gap-11 md:gap-0 mx-2  md:mx-6  pb-20 border-b-2 border-gray-400"
            >
                <div
                    id="shop"
                    className="flex flex-col w-[40%] text-opacity-40 "
                >
                    <h4 className="font-bold text-blazePrimary300">Shop</h4>
                    <ul className="space-y-4">
                        <li className="transition hover:text-blazeCTA">
                            New Arrivals
                        </li>
                        <li className="transition hover:text-blazeCTA">
                            Productivity
                        </li>
                        <li className="transition hover:text-blazeCTA">
                            Workspace
                        </li>
                        <li className="transition hover:text-blazeCTA">
                            Accessories
                        </li>
                        <li className="transition hover:text-blazeCTA">Sale</li>
                    </ul>
                </div>
                <div
                    id="company"
                    className="flex flex-col w-[45%] text-opacity-40 "
                >
                    <h4 className="font-bold text-blazePrimary300">Company</h4>
                    <ul className="space-y-4">
                        <li className="transition hover:text-blazeCTA">
                            <Link to="/about-us">About us</Link>
                        </li>
                        <li className="transition hover:text-blazeCTA">
                            <Link to="/sustainability">Sustainability</Link>
                        </li>
                        <li className="transition hover:text-blazeCTA">
                            <Link to="/press">Press</Link>
                        </li>
                        <li className="transition hover:text-blazeCTA">
                            <Link to="/careers">Careers</Link>
                        </li>
                        <li className="transition hover:text-blazeCTA">
                            <Link to="/terms-and-conditions">
                                Terms & Conditions
                            </Link>
                        </li>
                        <li className="transition hover:text-blazeCTA">
                            <Link to="/privacy-policy">Privacy</Link>
                        </li>
                    </ul>
                </div>
                <div
                    id="account"
                    className="flex flex-col w-[40%] text-opacity-40 "
                >
                    <h4 className="font-bold text-blazePrimary300">Account</h4>
                    <ul className="space-y-4">
                        <li className="transition hover:text-blazeCTA">
                            <Link to="/login">Manage account</Link>
                        </li>
                        <li className="transition hover:text-blazeCTA">
                            <Link to="/returns">Returns & Exchanges</Link>
                        </li>
                        <li className="transition hover:text-blazeCTA">
                            <Link to="/giftcard">Redeem a Gift Card</Link>
                        </li>
                    </ul>
                </div>
                <div
                    id="connect"
                    className="flex flex-col w-[45%] text-opacity-40 "
                >
                    <h4 className="font-bold text-blazePrimary300">Connect</h4>
                    <ul className="space-y-4 ">
                        <li className="transition hover:text-blazeCTA">
                            <Link to="/contact">Contact Us</Link>
                        </li>
                        <li className="transition hover:text-blazeCTA">
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Twitter
                            </a>
                        </li>
                        <li className="transition hover:text-blazeCTA">
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Instagram
                            </a>
                        </li>
                        <li className="transition hover:text-blazeCTA">
                            <a
                                href="https://pinterest.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Pinterest
                            </a>
                        </li>
                        <li className="transition hover:text-blazeCTA">
                            <a
                                href="https:/linkedin.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                LinkedIn
                            </a>
                        </li>
                    </ul>
                </div>
                <div
                    id="newsletter"
                    className="flex flex-col w-full items-center"
                >
                    <p className="text-center md:text-left">
                        The latest deals to your inbox weekly.
                    </p>
                    <form className="flex w-full md:flex-col lg:flex-row">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="px-2 py-2 rounded-lg w-full"
                        />
                        <button
                            type="submit"
                            className="bg-blazeCTA rounded-lg text-white opacity-100 px-4 ml-2 md:ml-0 md:mt-2 lg:mt-0 lg:ml-2"
                            onClick={newsletterHandler}
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
            <div id="copyright" className="mt-10 mx-2 md:mx-6">
                <p>Copyright © 2022 Tim Emir</p>
            </div>
        </div>
    );
}
