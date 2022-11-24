import classNames from "classnames";
import React from "react";

export default function ItemCard({ imageUrl, title, className }) {
    return (
        <div
            className={classNames(
                "flex relative w-full h-96 md:h-80 md:w-56 bg-gradient-to-t from-blazePrimary900 to-blazePrimary50 rounded-lg overflow-hidden hover:opacity-80",
                className
            )}
        >
            <img
                src={imageUrl}
                className="object-center  w-full h-full opacity-70"
                alt=""
            />
            <div className="absolute w-full h-full">
                <span className="flex h-full items-end justify-center pb-8 text-white font-semibold text-xl ">
                    {title}
                </span>
            </div>
        </div>
    );
}
