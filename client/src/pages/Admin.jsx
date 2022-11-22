import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import LoginForm from "../components/UI/LoginForm";

export default function Admin() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function loginHandler(event) {
        setIsLoggedIn(event);
    }

    return (
        <>
            {/* Create an admin login form in the middle of the page */}
            {isLoggedIn ? (
                <h1>LoggedIn</h1>
            ) : (
                <LoginForm onPress={loginHandler} />
            )}
        </>
    );
}
