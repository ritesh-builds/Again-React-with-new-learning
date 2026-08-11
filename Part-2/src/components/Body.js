import React from 'react'
import ResList from './ResList';
import FoodCard from './FoodCard';

const Body = (props) => {
    const {resData} = props;
  // Array ke andar se sirf restaurants wali list nikalna
  const restaurantCards = ResList?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards || [];

  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search for food..." />
        <button>Search</button>
        <button 
        className='filter-btn'
        onClick={() => {
            const filteredList = restaurantCards.filter((res) => {

                console.log("Button Clicked!");
                console.log(res.card.card.info.avgRating);
                
                return res.card.card.info.avgRating >= 4
            })
        }}
        >Top rated Restraunts</button>
      </div>



      <div className="res-container">
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
