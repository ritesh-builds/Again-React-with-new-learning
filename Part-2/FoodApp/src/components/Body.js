import React, { useState } from 'react';
import ResList from './ResList';
import FoodCard from './FoodCard';

const Body = () => {
  // 1. Pehle Swiggy ke data se initial list nikal lo
  const initialRestaurants = ResList?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards || [];

  // 2. State ke andar default value mein wahi initial list pass kar do
  const [restaurantCards, setRestaurantCards] = useState(initialRestaurants);

  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search for food..." />
        <button>Search</button>
        
        <button 
          className='filter-btn'
          onClick={() => {
            // 3. Filter lagao original list par
            const filteredList = initialRestaurants.filter((res) => {
              return res?.card?.card?.info?.avgRating >= 4;
            });

            // 4. State update function mein filtered list pass kar do
            setRestaurantCards(filteredList);
            console.log("Top rated restaurants filtered!");
          }}
        >
          Top rated Restraunts
        </button>
      </div>

      <div className="res-container">
        {/* 5. Map hamesha state variable ('restaurantCards') par chalega */}
        {restaurantCards.map((restaurant) => (
          <FoodCard
            key={restaurant?.card?.card?.info?.id}
            resData={restaurant?.card?.card}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
