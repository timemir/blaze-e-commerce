import React, { useState } from "react";
import AdminDashboard from "../components/Admin/AdminDashboard";
import LoginForm from "../components/UI/LoginForm";

export default function Admin() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    function loginHandler(event) {
        setIsLoggedIn(event);
    }

    return (
        <>
            {isLoggedIn ? (
                <AdminDashboard />
            ) : (
                <LoginForm onPress={loginHandler} />
            )}
        </>
    );
}
