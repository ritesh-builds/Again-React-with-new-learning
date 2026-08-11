import React from 'react'
import { CDN_URL } from '../utils/constants';

const FoodCard = (props) => {
  const { resData } = props;

  const {cloudinaryImageId, name, address, costForTwoMessage, deliveryTime, avgRatingString} = resData.info;

  // Agar galti se koi khali card aata hai, toh app crash na kare isliye check laga diya...
  if (!resData || !resData.info) return null;

  return (
    <div className="food-card">
      <div className="img-container">
        <img
          className="food-image"
          src={`${CDN_URL+resData.info.cloudinaryImageId}`}
          alt={resData.info.name}
        />
      </div>

      <div className="food-info">
        {/* Optional chaining taaki cuisines na hone par code na fate */}
        <h2>{resData.info.cuisines?.join(", ")}</h2>

        <p className="restaurant-name">{name}</p>

        <p className="address">📍 {address}</p>

        <div className="food-details">
          <span className="price">💰 {costForTwoMessage}</span>

          <span className="delivery-time">
            🛵 {deliveryTime} min
          </span>
        </div>

        <div className="rating">⭐ {avgRatingString}</div>
      </div>
    </div>
  );
};

export default FoodCard;
