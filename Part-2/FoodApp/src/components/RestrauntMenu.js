import React, { useEffect, useState } from "react";
import MOCK_DATA from "../data/mockData"; // Mock data import karo
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RESTRAUNT_MENU_API } from "../utils/constants";

const RestrauntMenu = () => {   
    const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=29.6873237&lng=76.9792536&restaurantId=726124&catalog_qa=undefined&submitAction=ENTER`)

        const json = await data.json()

        console.log(json);
        setResInfo(json)
        
    };

    if (resInfo === null) {
        return <Shimmer />;
    }

    const restaurantCard = resInfo?.data?.cards?.find(
        (c) => c?.card?.card?.info
    );
    const { name, cuisines, costForTwoMessage, avgRating, sla } =
        restaurantCard?.card?.card?.info || {};

    const regularCards =
        resInfo?.data?.cards?.find((c) => c?.groupedCard)?.groupedCard
            ?.cardGroupMap?.REGULAR?.cards || [];

    const categories = regularCards.filter((c) => c?.card?.card?.itemCards);

    return (
        <div className="menu">
            <h1>{name}</h1>

            <p className="restaurant-info">
                {cuisines?.join(", ")} • {costForTwoMessage} • ⭐ {avgRating} •{" "}
                {sla?.slaString}
            </p>

            {categories.map((category, idx) => (
                <div key={idx} className="menu-category">
                    <h2>{category.card.card.title}</h2>

                    <ul>
                        {category.card.card.itemCards.map((item) => {
                            const info = item.card.info;

                            return (
                                <li key={info.id}>
                                    <span className="item-name">
                                        {info.name}
                                    </span>

                                    <span className="item-price">
                                        ₹{info.price / 100}
                                    </span>

                                    {info.ratings?.aggregatedRating?.rating && (
                                        <span className="item-rating">
                                            ⭐ {info.ratings.aggregatedRating.rating}
                                        </span>
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