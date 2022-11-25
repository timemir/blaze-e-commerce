import React, { useEffect, useState } from "react";
import Footer from "../components/UI/Home/Footer";
import Hero from "../components/UI/Home/Hero";
import ItemCardList from "../components/UI/Home/ItemCardList";

export default function Home() {
    const [itemCards, setItemCards] = useState([]);

    useEffect(() => {
        // TODO: Fetch itemCards
        setItemCards([
            {
                id: 1,
                title: "New Arrivals",
                link: "/new-arrivals",
                imageUrl:
                    "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            },
            {
                id: 2,
                title: "Productivity",
                link: "/productivity",
                imageUrl:
                    "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&q=80",
            },
            {
                id: 3,
                title: "Workspace",
                link: "/workspace",
                imageUrl:
                    "https://images.unsplash.com/photo-1564466809058-bf4114d55352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
            },
            {
                id: 4,
                title: "Accessories",
                link: "/accessories",
                imageUrl:
                    "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2960&q=80",
            },
            {
                id: 5,
                title: "Sale",
                link: "/sale",
                imageUrl:
                    "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=808&q=80",
            },
        ]);
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
