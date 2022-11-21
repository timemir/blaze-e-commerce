import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

export default function Item({ item }) {
    const [isHearted, setIsHearted] = useState(false);
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
                            onClick={() => setIsHearted(false)}
                        />
                    ) : (
                        <AiOutlineHeart
                            className="text-3xl"
                            onClick={() => setIsHearted(true)}
                        />
                    )}
                </div>
                <div className="flex justify-center items-center h-10 w-16 rounded-r-lg absolute bottom-2 left-0 bg-red-500">
                    {item.sale ? (
                        <p className="text-2xl text-white font-bold">Deal</p>
                    ) : (
                        <p />
                    )}
                </div>
                <img
                    className="rounded-lg"
                    src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80"
                    alt=""
                />
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
