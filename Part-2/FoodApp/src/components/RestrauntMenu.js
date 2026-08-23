import React, { useEffect, useState } from "react";
import { RESTRAUNT_MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestrauntMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        try {
            const data = await fetch(RESTRAUNT_MENU_API);

            console.log("Status:", data.status);
            console.log("URL:", data.url);

            const json = await data.json();

            console.log("Menu data fetched:", json);

            setResInfo(json);

        } catch (error) {
            console.error("Error fetching menu:", error);
        }
    };

    if (resInfo === null) {
        return <Shimmer />;
    }

    const restaurantInfo = resInfo?.data?.cards?.[2]?.card?.card?.info;

    return (
        <div className="menu text-white">

            <h1 className="text-white">
                {restaurantInfo?.name}
            </h1>

            <h2>Menu</h2>

            <ul className="text-white">
                <li>Biryani</li>
                <li>Burgers</li>
                <li>Diet Coke</li>
                <li>Pizza</li>
                <li>Chole Bhature</li>
            </ul>

        </div>
    );
};

export default RestrauntMenu;