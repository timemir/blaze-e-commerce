import { Avatar } from "@boringer-avatars/react";
import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import useAuthStore from "../../store/authStore";
import { getUserById } from "../../util/http/user";

export default function Profile() {
    const user = useAuthStore();
    const [userData, setUserData] = useState(null);
    useEffect(() => {
        async function getUserData() {
            const response = await getUserById(user.userId);
            console.log(response);
            setUserData(response);
        }
        getUserData();
    }, [user.userId]);

    return (
        <div className="flex flex-col items-center min-h-screen pt-10 space-y-4 bg-gray-100">
            <h1 className="text-3xl">
                {userData && userData.username}&apos;s Profile
            </h1>
            <Avatar
                title={false}
                size={120}
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
            {/* About */}
            <div className="flex flex-col bg-white w-[95%]">
                <div className="flex justify-center items-center space-x-2 m-2">
                    <CgProfile />
                    <h2 className="font-bold">About</h2>
                </div>
                <div className="bg-white p-3 shadow-sm rounded-sm">
                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8" />
                    {userData && (
                        <>
                            <div className="text-gray-700">
                                <div className="grid md:grid-cols-2 text-sm">
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">
                                            First Name
                                        </div>
                                        <div className="px-4 py-2">
                                            {userData.firstName
                                                ? userData.firstName
                                                : "Not given"}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">
                                            Last Name
                                        </div>
                                        <div className="px-4 py-2">
                                            {userData.lastName
                                                ? userData.lastName
                                                : "Not given"}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">
                                            Gender
                                        </div>
                                        <div className="px-4 py-2">
                                            {userData.gender
                                                ? userData.gender
                                                : "Not given"}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">
                                            Contact No.
                                        </div>
                                        <div className="px-4 py-2">
                                            {userData.phone
                                                ? userData.phone
                                                : "Not given"}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">
                                            Current Address
                                        </div>
                                        <div className="px-4 py-2">
                                            {userData.address
                                                ? userData.address
                                                : "Not given"}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">
                                            Billing Address
                                        </div>
                                        <div className="px-4 py-2">
                                            {userData.billingAddress
                                                ? userData.billingAddress
                                                : "Not given"}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">
                                            Email.
                                        </div>
                                        <div className="px-4 py-2">
                                            <a
                                                className="text-blazeCTA"
                                                href="mailto:jane@example.com"
                                            >
                                                {userData.email
                                                    ? userData.email
                                                    : "Not given"}
                                            </a>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">
                                            Birthday
                                        </div>
                                        <div className="px-4 py-2">
                                            {userData.birthdate
                                                ? userData.birthdate
                                                : "Not given"}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button
                                type="button"
                                className="block w-full text-blazeCTA text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4"
                            >
                                Change Information
                            </button>
                        </>
                    )}
                </div>
            </div>
            {/* Previous orders */}
        </div>
    );
}
