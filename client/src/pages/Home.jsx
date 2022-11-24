import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import ItemCard from "../components/UI/ItemCard";

export default function Home() {
    function newsletterHandler(event) {
        event.preventDefault();
        console.log("Newsletter");
    }

    return (
        <div className="flex flex-col space-y-24">
            <div
                id="hero"
                className="flex flex-col items-center space-y-8 justify-center h-screen px-6  bg-hero-bg bg-cover bg-center bg-fixed bg-blend-difference bg-blazePrimary800"
            >
                <h1 className="font-bold text-4xl md:text-6xl text-white">
                    New arrivals are here
                </h1>
                <p className="text-md text-center md:max-w-3xl text-white">
                    The new arrivals have, well, newly arrived. Check out the
                    latest options from our winter small-batch release while
                    they are still in stock.
                </p>
                <button
                    type="button"
                    className="rounded-lg shadow-xl bg-blazeCTA p-4 font-bold text-white"
                >
                    Shop New Arrivals
                </button>
            </div>
            <div id="main" className="mx-4">
                <div id="all-categories">
                    <div id="heading" className="flex justify-between mb-4">
                        <h2 className="text-xl md:text-2xl font-bold">
                            Shop by Category
                        </h2>
                        <div className="flex items-center">
                            <button
                                type="button"
                                className="text-blazeCTA font-semibold text-md md:text-lg"
                            >
                                Browse all categories
                            </button>
                            <AiOutlineArrowRight className="text-blazeCTA ml-1" />
                        </div>
                    </div>
                    <div className="flex flex-col space-y-8 md:space-y-0 justify-between items-center flex-wrap md:flex-row">
                        <ItemCard
                            title="New Arrivals"
                            imageUrl="https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                        />
                        <ItemCard
                            title="Productivity"
                            imageUrl="https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&q=80"
                        />
                        <ItemCard
                            title="Workspace"
                            imageUrl="https://images.unsplash.com/photo-1564466809058-bf4114d55352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
                        />
                        <ItemCard
                            title="Accessories"
                            className="hidden lg:flex"
                            imageUrl="https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2960&q=80"
                        />
                        <ItemCard
                            title="Sale"
                            className="hidden xl:flex"
                            imageUrl="https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=808&q=80"
                        />
                    </div>
                </div>
            </div>
            <div
                id="footer"
                className="flex flex-col bg-blazePimary rounded-t-lg text-[#B4B9C2] w-full justify-between  pt-10 pb-16"
            >
                <div
                    id="columns"
                    className="flex flex-wrap md:flex-nowrap md:flex-row md:space-x-4  gap-11 md:gap-0 mx-2 md:mx-0 md:px-6 pb-12 border-b-2 border-gray-400"
                >
                    <div
                        id="shop"
                        className="flex flex-col w-[40%] text-opacity-40 "
                    >
                        <h4 className="font-bold text-blazePrimary300">Shop</h4>
                        <ul className="space-y-4">
                            <li className="transition hover:text-blazeCTA">
                                Category 1
                            </li>
                            <li className="transition hover:text-blazeCTA">
                                Category 2
                            </li>
                            <li className="transition hover:text-blazeCTA">
                                Category 3
                            </li>
                            <li className="transition hover:text-blazeCTA">
                                Category 4
                            </li>
                            <li className="transition hover:text-blazeCTA">
                                Category 5
                            </li>
                        </ul>
                    </div>
                    <div
                        id="company"
                        className="flex flex-col w-[45%] text-opacity-40 "
                    >
                        <h4 className="font-bold text-blazePrimary300">
                            Company
                        </h4>
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
                        <h4 className="font-bold text-blazePrimary300">
                            Account
                        </h4>
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
                        <h4 className="font-bold text-blazePrimary300">
                            Connect
                        </h4>
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
                        className="flex flex-col w-full items-start"
                    >
                        <p className="text-center md:text-left">
                            The latest deals to your inbox weekly.
                        </p>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className=" px-2 rounded-lg"
                            />
                            <button
                                type="submit"
                                className="bg-blazeCTA rounded-lg text-white opacity-100 px-4 ml-2"
                                onClick={newsletterHandler}
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
                <div id="copyright" className="mt-10">
                    <p>Copyright © 2022 Tim Emir</p>
                </div>
            </div>
        </div>
    );
}
