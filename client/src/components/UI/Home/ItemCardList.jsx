import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import ItemCard from "./ItemCard";

export default function ItemCardList({ heading, itemCards }) {
    return (
        <div className="itemCardList">
            <div className="flex justify-between mb-4">
                <h2 className="text-xl md:text-2xl font-bold">{heading}</h2>
                <div className="flex items-center">
                    <button
                        type="button"
                        className="text-blazeCTA font-semibold text-md md:text-lg"
                    >
                        Browse all categories
                    </button>
                    <AiOutlineArrowRight className="text-blazeCTA ml-1" />
                </div>
            </div>
            <div className="flex flex-col space-y-8 md:space-y-0 justify-between items-center flex-wrap md:flex-row">
                {itemCards.map((itemCard) => {
                    if (itemCard.id === 4) {
                        return (
                            <ItemCard
                                key={itemCard.id}
                                title={itemCard.title}
                                imageUrl={itemCard.imageUrl}
                                link={itemCard.link}
                                className="hidden lg:flex"
                            />
                        );
                    }
                    if (itemCard.id === 5) {
                        return (
                            <ItemCard
                                key={itemCard.id}
                                title={itemCard.title}
                                imageUrl={itemCard.imageUrl}
                                link={itemCard.link}
                                className="hidden xl:flex"
                            />
                        );
                    }
                    return (
                        <ItemCard
                            key={itemCard.id}
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
