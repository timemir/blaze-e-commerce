import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import ItemCard from "./ItemCard";

export default function ItemCardList({ heading, itemCards }) {
    return (
        <div className="itemCardList">
            <div className="flex justify-between mb-4">
                <h2 className="text-xl md:text-2xl font-bold">{heading}</h2>
                <div className="flex items-center">
                    <Link to="/all-categories">
                        <button
                            type="button"
                            className="text-blazeCTA font-semibold text-md md:text-lg"
                        >
                            Browse all categories
                        </button>
                    </Link>
                    <AiOutlineArrowRight className="text-blazeCTA ml-1" />
                </div>
            </div>
            <div className="flex flex-col space-y-8 md:space-y-0 justify-between items-center flex-wrap md:flex-row">
                {itemCards.map((itemCard, i) => {
                    // console.log(itemCard._id);
                    if (i === 3) {
                        return (
                            <ItemCard
                                key={itemCard._id}
                                id={itemCard._id}
                                title={itemCard.title}
                                imageUrl={itemCard.imageUrl}
                                link={itemCard.link}
                                className="hidden lg:flex"
                            />
                        );
                    }
                    if (i === 4) {
                        return (
                            <ItemCard
                                key={itemCard._id}
                                id={itemCard._id}
                                title={itemCard.title}
                                imageUrl={itemCard.imageUrl}
                                link={itemCard.link}
                                className="hidden xl:flex"
                            />
                        );
                    }
                    if (i > 4) {
                        return null;
                    }
                    return (
                        <ItemCard
                            key={itemCard._id}
                            id={itemCard._id}
                            title={itemCard.title}
                            imageUrl={itemCard.imageUrl}
                            link={itemCard.link}
                        />
                    );
                })}
            </div>
        </div>
    );
}
