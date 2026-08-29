import { Link } from "react-router-dom";
import "../style/Product.css";

function Product() {
  const products = [
    {
      id: 1,
      name: "Urban Runner",
      type: "Everyday Sneakers",
      price: "₹2,499",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    },
    {
      id: 2,
      name: "Classic Walk",
      type: "Comfort Shoes",
      price: "₹2,999",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772"
    },
    {
      id: 3,
      name: "Street Flex",
      type: "Casual Sneakers",
      price: "₹3,499",
      image: "https://images.unsplash.com/photo-1552346154-21d32810aba3"
    },
    {
      id: 4,
      name: "Daily Comfort",
      type: "Lifestyle Shoes",
      price: "₹2,799",
      image: "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3"
    }
  ];

  return (
    <section className="product-section">
      <div className="product-container">

        <div className="product-header">
          <div>
            <span>OUR COLLECTION</span>
            <span className="collections">
              <Link to='/Product/Men'><button>Men</button></Link>
              <Link to='/Product/Women'><button>Women</button></Link>
            </span>
            
            <h1>
              Find your
              <strong> comfort.</strong>
            </h1>
          </div>

          <p>
            Carefully designed footwear that combines
            everyday comfort with modern style.
          </p>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>

              <div className="product-image">
                <img src={product.image} alt={product.name} />

                <button className="view-btn">
                  View →
                </button>
              </div>

              <div className="product-details">
                <div>
                  <h2>{product.name}</h2>
                  <p>{product.type}</p>
                </div>

                <span>{product.price}</span>
              </div>

            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}

export default Product;
