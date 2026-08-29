import React from "react";
import "../style/MenCollection.css";

const MenCollection = () => {
	
  const products = [
    {
      id: 1,
      name: "Aero Runner",
      category: "Running",
      price: "₹2,999",
    },
    {
      id: 2,
      name: "Urban Classic",
      category: "Casual",
      price: "₹2,499",
    },
    {
      id: 3,
      name: "Street Form",
      category: "Sneakers",
      price: "₹3,499",
    },
    {
      id: 4,
      name: "Daily Walk",
      category: "Lifestyle",
      price: "₹2,799",
    },
    {
      id: 5,
      name: "Flex Motion",
      category: "Sports",
      price: "₹3,199",
    },
    {
      id: 6,
      name: "Essential Low",
      category: "Everyday",
      price: "₹2,299",
    },
  ];

  return (
    <section className="men-collection">

      <div className="men-header">
        <span>MEN'S COLLECTION</span>

        <h1>
          Made to <strong>move.</strong>
        </h1>

        <p>
          Explore footwear designed for everyday comfort,
          effortless movement, and modern style.
        </p>
      </div>

      <div className="men-toolbar">
        <span>06 PRODUCTS</span>

        <button>
          Sort by: Featured ↓
        </button>
      </div>

      <div className="men-grid">
        {products.map((product) => (
          <div className="men-card" key={product.id}>

            <div className="men-image">
              <div className="shoe-placeholder">
                👟
              </div>

              <span className="product-number">
                0{product.id}
              </span>

              <button className="quick-view">
                Quick View →
              </button>
            </div>

            <div className="men-details">
              <div>
                <h2>{product.name}</h2>
                <p>{product.category}</p>
              </div>

              <span>{product.price}</span>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default MenCollection;
