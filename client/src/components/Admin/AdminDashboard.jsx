import React, { useState } from "react";
import { IoAnalytics, IoChatbubbles, IoCompass, IoHome } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
    const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

    function toggleSidebar() {
        setSidebarIsOpen(!sidebarIsOpen);
    }

    return (
        <div className="bg-gray-100  h-screen overflow-hidden relative">
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
                                    className="w-full   text-blazeCTA  flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start  border-l-4 border-blazeCTA"
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
                                    className="w-full text-gray-400 flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start  border-l-4 hover:text-blazeCTA border-transparent"
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
                    </header>
                </div>
            </div>
        </div>
    );
}
