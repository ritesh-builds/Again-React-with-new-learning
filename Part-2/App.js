import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://imgs.search.brave.com/RRO0wYmlFI_Ox9FscLpO4J2GVLM2e90p1zxn6PlCesI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzUv/NjUxLzQzOC9zbWFs/bC9jb2xvcmZ1bC1m/YXN0LWZvb2QtY2Fy/dC13aXRoLWJ1cmdl/ci1mcmllcy1hbmQt/ZHJpbmstaXNvbGF0/ZWQtb24tdHJhbnNw/YXJlbnQtYmFja2dy/b3VuZC1mcmVlLXBu/Zy5wbmc"
          alt="Logo"
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>🏠Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>🛒Cart</li>
        </ul>
      </div>
    </div>
  );
};

const resObj = {
  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",

  info: {
    id: "101951",
    name: "Star Food Hut",
    city: "86",

    slugs: {
      restaurant: "star-food-hut-chaman-garden-chaman-garden",
      city: "karnal",
    },

    cloudinaryImageId: "ptx6swawrttqeyrjca4u",

    address: "Shop No 19, Mahila Ashram Market, behind SD Model School",

    locality: "Dyal Singh Colony",

    areaName: "19,Hudda Market, Old Bus Stand",

    costForTwo: "20000",

    costForTwoMessage: "₹200 FOR TWO",

    cuisines: ["Chinese", "Snacks", "Pizzas", "Pastas", "Tandoor"],

    avgRating: 4,

    feeDetails: {},

    parentId: "195397",

    avgRatingString: "4.0",

    totalRatingsString: "1.7K+",

    sla: {
      deliveryTime: 22,
      minDeliveryTime: 20,
      maxDeliveryTime: 25,
      lastMileTravel: 1.3,
      serviceability: "SERVICEABLE",
      rainMode: "RAIN_MODE_NONE",
      slaString: "20-25 MINS",
      lastMileTravelString: "1.3 km",
      iconType: "ICON_TYPE_EMPTY",
    },

    availability: {
      opened: true,
      restaurantClosedMeta: {},
    },

    badges: {
      imageBadges: [
        {
          imageId: "android/static-assets/icons/big_rx.png",
          description: "bolt!",
        },
      ],
    },

    aggregatedDiscountInfoV3: {
      header: "70% OFF",
      subHeader: "UPTO ₹130",

      logoCtx: {
        text: "BENEFITS",
      },
    },

    ratingSlab: "RATING_SLAB_4",

    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
      commsStyling: {},
    },

    cartOrderabilityNudgeBanner: {
      parameters: {},
      presentation: {},
    },

    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },

    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",

    featuredSectionInfo: {
      sectionTitle: "More",
    },

    showEoOffer: true,

    priceComparisonComms: {},
  },

  analytics: {
    screenName: "explore",
    context:
      '{"tid":"47a3179c-c7dc-5bb1-9879-b1621f370962","grid":"3d6aea7d-44ea-40a6-9920-4e38488e07b3","queryUniqueId":"574dd5b0-d440-ae15-613c-b091710c903f","query":"food"}',
    objectValue: "101951",
    impressionObjectName: "impression-restaurant",
    clickObjectName: "click-restaurant",
  },

  ctaWithParams: {
    link: "swiggy://menu",
    type: "DEEPLINK",

    params: {
      sourceSessionId: "sz6b4faf5c9-e798-495e-80db-52e7f42bd",
      source: "SEARCH",
      isSld: "false",
      sourceRequestId: "00000000000000000000000000000000",
      qrEnabled: "false",
      restaurant_id: "101951",
      query: "food",
    },
  },
};



// Yahan destructuring ekdum clean kar di hai
const FoodCard = (props) => {
  const { resData } = props;
  return (
    <div className="food-card">
      <div className="img-container">
        <img
          className="food-image"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/${resData.info.cloudinaryImageId}`}
          alt={resData.info.name}
        />
      </div>

      <div className="food-info">
        <h2>{resData.info.cuisines.join(", ")}</h2>

        <p className="restaurant-name">{resData.info.name}</p>

        <p className="address">📍 {resData.info.address}</p>

        <div className="food-details">
          <span className="price">💰 {resData.info.costForTwoMessage}</span>

          <span className="delivery-time">
            🛵 {resData.info.sla.deliveryTime} min
          </span>
        </div>

        <div className="rating">⭐ {resData.info.avgRating}</div>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search for food..." />
        <button>Search</button>
      </div >

      <div className="res-container">
        {/* Yahan naam exactly wo diya hai jo FoodCard expect kar raha hai */}
        <FoodCard resData={resObj} />
        <FoodCard resData={resObj} />
        <FoodCard resData={resObj} />
      </div>
    </div>
  );
};

const Footer = () => {
  return <div className="footer"></div>;
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);


{/* <FoodCard
                    resName="Domino's Pizza"
                    price="299"
                    time="30"
                    foodName="Farmhouse Pizza"
                    imgUrl="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
                />

                <FoodCard
                    resName="Burger King"
                    price="199"
                    time="25"
                    foodName="Eggs"
                    imgUrl="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D"
                />

                <FoodCard
                    resName="Subway"
                    price="649"
                    time="10"
                    foodName="Sandwitch"
                    imgUrl="https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=749&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <FoodCard
                    resName="Subway"
                    price="649"
                    time="10"
                    foodName="Sandwitch"
                    imgUrl="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb2R8ZW58MHx8MHx8fDA%3D"
                />
                <FoodCard
                    resName="KFC"
                    price="649"
                    time="10"
                    foodName="Sandwitch"
                    imgUrl="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D"
                />
                <FoodCard
                    resName="Subway"
                    price="649"
                    time="10"
                    foodName="Sandwitch"
                    imgUrl="https://plus.unsplash.com/premium_photo-1663858367001-89e5c92d1e0e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D"
                />
                <FoodCard
                    resName="Subway"
                    price="649"
                    time="10"
                    foodName="Sandwitch"
                    imgUrl="https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D"
                /> */}



