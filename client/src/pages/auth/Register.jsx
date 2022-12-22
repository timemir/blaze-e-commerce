import React from "react";
import Logo from "../../assets/images/icons/iconTrans.png";
import AuthForm from "../../components/Auth/AuthForm";
import Footer from "../../components/UI/Home/Footer";

export default function Register() {
    return (
        <>
            <div className="h-screen">
                <div className="flex flex-col items-center py-10 space-y-10 md:w-[50%] md:mx-auto">
                    {/* Logo */}
                    <div className="flex flex-col items-center">
                        <img className="w-12" src={Logo} alt="" />
                        <h1 className="text-2xl font-bold mt-2">
                            Create your account
                        </h1>
                        <p className="font-light">
                            Or{" "}
                            <span className="text-blazeCTA">
                                continue as guest
                            </span>
                        </p>
                    </div>
                    {/* Form */}
                    <AuthForm type="register" />
                </div>
            </div>
            <Footer />
        </>
    );
}
