import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

export default function Item({ item }) {
    const [isHearted, setIsHearted] = useState(false);
    function heartClickHandler() {
        // TODO: Add to wishlist in backend
        setIsHearted(!isHearted);
    }

    return (
        <div
            key={item.id}
            className="bg-blazeAccent200 flex flex-col  m-2 rounded-lg p-2"
        >
            <div className="relative">
                <div className="flex justify-center items-center h-10 w-16 rounded-l-lg absolute top-2 right-0 bg-blazePrimary100">
                    {isHearted ? (
                        <AiFillHeart
                            className="text-3xl text-red-600"
                            onClick={heartClickHandler}
                        />
                    ) : (
                        <AiOutlineHeart
                            className="text-3xl"
                            onClick={heartClickHandler}
                        />
                    )}
                </div>
                <div
                    className={`flex justify-center items-center h-10 w-16 rounded-r-lg absolute bottom-2 left-0 ${
                        item.sale ? "bg-red-500 " : "bg-transparent"
                    }`}
                >
                    {item.sale ? (
                        <p className="text-2xl text-white font-bold">Deal</p>
                    ) : (
                        <p />
                    )}
                </div>
                <img className="rounded-lg" src={item.image} alt="" />
            </div>
            <h2 className="text-blazePimary opacity-70">{item.brand}</h2>
            <h2 className="text-blazePimary text-lg truncate ">{item.name}</h2>
            <p
                className={
                    item.sale
                        ? "text-red-600 text-xl"
                        : "text-blazeAccent800 text-xl"
                }
            >{`${item.price}€`}</p>
        </div>
    );
}
