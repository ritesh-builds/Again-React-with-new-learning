import React from "react";
import "../style/WomenCollection.css";

const WomenCollection = () => {
  const products = [
    {
      id: 1,
      name: "Luna Walk",
      category: "Everyday",
      price: "₹2,799",
    },
    {
      id: 2,
      name: "Urban Muse",
      category: "Sneakers",
      price: "₹3,299",
    },
    {
      id: 3,
      name: "Cloud Step",
      category: "Comfort",
      price: "₹2,999",
    },
    {
      id: 4,
      name: "Soft Motion",
      category: "Lifestyle",
      price: "₹2,599",
    },
    {
      id: 5,
      name: "Street Ease",
      category: "Casual",
      price: "₹3,199",
    },
    {
      id: 6,
      name: "Daily Form",
      category: "Everyday",
      price: "₹2,499",
    },
  ];

  return (
    <section className="women-collection">

      <div className="women-header">
        <span>WOMEN'S COLLECTION</span>

        <h1>
          Walk your <strong>way.</strong>
        </h1>

        <p>
          Thoughtfully designed footwear that brings together
          comfort, confidence, and effortless everyday style.
        </p>
      </div>

      <div className="women-toolbar">
        <span>06 PRODUCTS</span>

        <button>
          Sort by: Featured ↓
        </button>
      </div>

      <div className="women-grid">
        {products.map((product) => (
          <div className="women-card" key={product.id}>

            <div className="women-image">
              <div className="women-shoe">
                👟
              </div>

              <span className="women-number">
                0{product.id}
              </span>

              <button className="women-view">
                Quick View →
              </button>
            </div>

            <div className="women-details">
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

export default WomenCollection;