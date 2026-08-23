import React, { useEffect, useState } from 'react';
import { SWIGGY_API } from '../utils/constants';
import FoodCard from './FoodCard';
import Shimmer from './Shimmer';

const Body = () => {

  const [restaurantCards, setRestaurantCards] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(SWIGGY_API);
      const json = await response.json();

      console.log("API Data Fetched:", json);

      const swiggyData =
        json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards || [];

      setRestaurantCards(swiggyData);
      setAllRestaurants(swiggyData);

      // Data aa gaya, ab loading false
      setLoading(false);

    } catch (error) {
      console.log("API Fetch Error:", error);

      // Error ke case mein bhi loading khatam
      setLoading(false);
    }
  };

  // Sirf API load hone tak Shimmer dikhao
  if (loading) {
    return <Shimmer />;
  }

  return (
    <div className="body">

      <div className="search">

        <input
          type="text"
          placeholder="Search for food..."
          value={searchText}
          onChange={(evt) => {
            setSearchText(evt.target.value);
          }}
        />

        <button
          onClick={() => {
            const filteredList = allRestaurants.filter((restaurant) =>
              restaurant?.card?.card?.info?.name
                ?.toLowerCase()
                .includes(searchText.toLowerCase())
            );

            setRestaurantCards(filteredList);
          }}
        >
          Search
        </button>

        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = allRestaurants.filter((res) => {
              return res?.card?.card?.info?.avgRating >= 4.3;
            });

            setRestaurantCards(filteredList);
            console.log("Top rated restaurants filtered!");
          }}
        >
          Top rated Restraunts
        </button>

      </div>

      {restaurantCards.length === 0 ? (
        <h2
        style={{
          textAlign: "center",
          marginTop: "100px",
          marginBottom: "200px",
          fontSize: "44px",
          color: "#555"
        }}
      >
        No restaurants found 😕
      </h2>
      ) : (
        <div className="res-container">
          {restaurantCards.map((restaurant) => (
            <FoodCard
              key={restaurant?.card?.card?.info?.id}
              resData={restaurant?.card?.card}
            />
          ))}
        </div>
      )}

    </div>
  );
};

export default Body;


