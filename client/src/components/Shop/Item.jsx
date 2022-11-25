import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

// TODO: Make this component more dynamic(smaller) for larger screens
export default function Item({ item }) {
    const [isHearted, setIsHearted] = useState(false);
    function heartClickHandler() {
        // TODO: Add to wishlist in backend
        setIsHearted(!isHearted);
    }

    return (
        <div key={item.id} className="relative">
            <div className="relative min-h-80 aspect-auto w-full overflow-hidden rounded-md bg-gray-200 hover:opacity-75 lg:aspect-none lg:h-80">
                <div className="flex justify-center items-center h-10 w-16 rounded-l-lg absolute top-2 right-0 bg-blazePrimary100 ">
                    {isHearted ? (
                        <AiFillHeart
                            className="text-3xl text-blazeCTA"
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
                <a href={item.href}>
                    <img
                        src={item.image}
                        alt={item.imageAlt}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                </a>
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700 ">
                        <a href={item.href}>
                            <p>{item.name}</p>
                        </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{item.brand}</p>
                </div>
                <p
                    className={`text-sm font-medium ${
                        item.sale
                            ? "text-red-600 text-xl"
                            : "text-blazeAccent800 text-xl"
                    } `}
                >
                    {item.price}
                </p>
            </div>
        </div>
    );
}
