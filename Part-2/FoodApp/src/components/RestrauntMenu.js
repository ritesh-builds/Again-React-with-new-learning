import React, { useEffect, useState } from "react";
import MOCK_DATA from "../data/mockData";
import Shimmer from "./Shimmer";

const RestrauntMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        // Real Swiggy API blocks browser calls (CORS + bot protection).
        // Using real captured response as mock data for now.
        setResInfo(MOCK_DATA);

        // Jab real API kaam karega, isse uncomment kar dena:
        // const data = await fetch(RESTRAUNT_MENU_API);
        // const json = await data.json();
        // setResInfo(json);
    };

    if (resInfo === null) {
        return <Shimmer />;
    }

    // ⚠️ Swiggy ke response me card ka index restaurant-to-restaurant change ho sakta hai,
    // isliye hardcoded cards[2] / cards[4] jaisa index use karne ke bajaye .find() se
    // sahi card dhoondo — yeh zyada robust approach hai.

    const restaurantCard = resInfo?.data?.cards?.find(
        (c) => c?.card?.card?.info
    );
    const { name, cuisines, costForTwoMessage, avgRating, sla } =
        restaurantCard?.card?.card?.info || {};

    const regularCards =
        resInfo?.data?.cards?.find((c) => c?.groupedCard)?.groupedCard
            ?.cardGroupMap?.REGULAR?.cards || [];

    // Har ItemCategory card (Recommended, Main course, etc.) ko nikal lo
    const categories = regularCards.filter((c) => c?.card?.card?.itemCards);

    return (
        <div className="menu text-white p-4">
            <h1 className="text-2xl font-bold">{name}</h1>
            <p>
                {cuisines?.join(", ")} • {costForTwoMessage} • ⭐ {avgRating} •{" "}
                {sla?.slaString}
            </p>

            {categories.map((category, idx) => (
                <div key={idx} className="mt-6">
                    <h2 className="text-xl font-semibold mb-2">
                        {category.card.card.title}
                    </h2>
                    <ul>
                        {category.card.card.itemCards.map((item) => {
                            const info = item.card.info;
                            return (
                                <li key={info.id} className="mb-2">
                                    {info.name} — ₹{info.price / 100}
                                    {info.ratings?.aggregatedRating?.rating && (
                                        <span> ⭐ {info.ratings.aggregatedRating.rating}</span>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default RestrauntMenu;