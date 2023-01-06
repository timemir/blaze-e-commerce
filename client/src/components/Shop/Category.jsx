import React, { useState } from "react";

import { Link } from "react-router-dom";

export default function Category({ category }) {
    const [categoryId, setCategoryId] = useState(category._id);
    return (
        <div key={category._id} className="relative">
            <div className="relative min-h-80 aspect-auto w-full overflow-hidden rounded-md bg-gray-200 hover:opacity-75 lg:aspect-none lg:h-80">
                <Link to={`${category.link}`} state={{ data: categoryId }}>
                    <img
                        src={category.imageUrl}
                        alt="category"
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                </Link>
            </div>
            <div className="mt-4 flex justify-center">
                <div>
                    <h3 className="text-xl font-bold text-gray-700 ">
                        <Link to={`${category.link}`}>
                            <p>{category.title}</p>
                        </Link>
                    </h3>
                </div>
                <p
                    className={`text-sm font-medium ${"text-blazeAccent800 text-xl"} `}
                />
            </div>
        </div>
    );
}
