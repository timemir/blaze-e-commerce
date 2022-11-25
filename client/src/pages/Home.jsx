import React, { useEffect, useState } from "react";
import Footer from "../components/UI/Home/Footer";
import Hero from "../components/UI/Home/Hero";
import ItemCardList from "../components/UI/Home/ItemCardList";
import { fetchCategories } from "../util/http/categories";

export default function Home() {
    const [itemCards, setItemCards] = useState([]);

    useEffect(() => {
        // Fetch categories from the backend
        (async () => {
            const fetchedCategories = await fetchCategories();
            setItemCards(fetchedCategories);
        })();
    }, []);

    return (
        <div className="flex flex-col space-y-24">
            <Hero
                heroHeading="New arrivals are here"
                heroText="The new arrivals have, well, newly arrived. Check out the latest
                options from our winter small-batch release while they are still
                in stock."
                heroBtnText="Shop New Arrivals"
            />
            <div id="main" className="mx-4">
                <ItemCardList
                    heading="Shop by Category"
                    itemCards={itemCards}
                />
                {/* Add Stuff below */}
                {/* ---------------------- */}
            </div>
            <Footer />
        </div>
    );
}
