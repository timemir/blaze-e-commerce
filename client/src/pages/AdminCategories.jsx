import React, { useState } from "react";
import { IoAnalytics, IoChatbubbles, IoCompass, IoHome } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import { Link } from "react-router-dom";
import CategoriesAddForm from "../components/Admin/CategoriesAddForm";

export default function AdminCategories() {
    const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
    const [message, setMessage] = useState({ type: "", text: "" });
    function toggleSidebar() {
        setSidebarIsOpen(!sidebarIsOpen);
    }
    function getMessage(msg) {
        setMessage(msg);
        setTimeout(() => {
            setMessage({ type: "", text: "" });
        }, 3000);
    }

    return (
        <div className="  h-screen overflow-hidden relative">
            <div className="flex items-start justify-between">
                <div
                    className={`h-screen ${
                        sidebarIsOpen ? "" : "hidden"
                    } lg:block shadow-lg relative w-80`}
                >
                    {/* Sidebar */}
                    <div className="bg-blazePimary rounded-t-lg mt-1 h-full ">
                        <div className="flex items-center justify-start pt-6 ml-8">
                            <p className="font-bold text-blazeCTA  text-xl">
                                Admin Dashboard
                            </p>
                        </div>
                        <nav className="mt-6">
                            <div>
                                <Link
                                    className="w-full  text-gray-400  flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start hover:text-blazeCTA border-l-4 border-transparent"
                                    to="/admin"
                                >
                                    <span className="text-left">
                                        <IoHome className="text-lg" />
                                    </span>
                                    <span className="mx-2 text-sm font-normal">
                                        Home
                                    </span>
                                </Link>
                                <Link
                                    to="/admin-categories"
                                    className="w-full text-blazeCTA flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start  border-l-4 border-blazeCTA"
                                >
                                    <span className="text-left">
                                        <IoCompass className="text-lg" />
                                    </span>
                                    <span className="mx-2 text-sm font-normal">
                                        Categories
                                    </span>
                                </Link>

                                <Link
                                    to="/admin-analytics"
                                    className="w-full text-gray-400 flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start hover:text-blazeCTA border-l-4 border-transparent"
                                >
                                    <span className="text-left">
                                        <IoAnalytics className="text-lg" />
                                    </span>
                                    <span className="mx-4 text-sm font-normal">
                                        Analytics
                                    </span>
                                </Link>
                                <Link
                                    to="/admin-comms"
                                    className="w-full text-gray-400 flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start hover:text-blazeCTA border-l-4 border-transparent"
                                >
                                    <span className="text-left">
                                        <IoChatbubbles className="text-lg" />
                                    </span>
                                    <span className="mx-4 text-sm font-normal">
                                        Communications
                                    </span>
                                </Link>
                            </div>
                        </nav>
                    </div>
                </div>
                {/* Main Content right */}
                <div className="flex flex-col  w-full md:space-y-4">
                    <header className="w-full h-16 z-40 flex items-center justify-between">
                        <div className="block lg:hidden ml-6">
                            <button
                                onClick={toggleSidebar}
                                type="button"
                                className="flex p-2 items-center rounded-full bg-blazePimary shadow text-gray-500 text-md"
                            >
                                <MdSpaceDashboard className="text-2xl text-blazeCTA" />
                            </button>
                        </div>
                        {message.type !== "" && (
                            <div
                                id="topMessageBar"
                                className={`w-full mx-2 px-4 rounded-lg ${
                                    message.type === "Error"
                                        ? "bg-red-500 text-white"
                                        : "bg-green-500 text-white"
                                } `}
                            >
                                {`${message.type}: ${message.text}`}
                            </div>
                        )}
                    </header>
                    {/* MAIN CONTENT  */}
                    <div className="flex flex-col space-y-5 p-4 md:grid md:grid-cols-2 md:gap-4">
                        <CategoriesAddForm getMessage={getMessage} />
                        <div>All Current Categories</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
