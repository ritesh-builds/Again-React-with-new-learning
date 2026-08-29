import React from "react";

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
    <section
      className="
        min-h-screen
        bg-[#080808]
        text-white
        px-[8%]
        py-[100px]
        max-[650px]:px-[25px]
        max-[650px]:py-[70px]
      "
    >
      {/* HEADER */}
      <div className="max-w-[700px] mb-[70px]">
        <span
          className="
            text-[11px]
            tracking-[4px]
            text-[#666]
          "
        >
          WOMEN'S COLLECTION
        </span>

        <h1
          className="
            text-[clamp(4rem,8vw,8rem)]
            leading-[0.85]
            font-normal
            tracking-[-6px]
            my-[25px]
            max-[650px]:tracking-[-3px]
          "
        >
          Walk your{" "}
          <strong className="text-[#777] font-normal">
            way.
          </strong>
        </h1>

        <p
          className="
            max-w-[450px]
            text-[#777]
            text-[14px]
            leading-[1.8]
          "
        >
          Thoughtfully designed footwear that brings together
          comfort, confidence, and effortless everyday style.
        </p>
      </div>

      {/* TOOLBAR */}
      <div
        className="
          border-t
          border-b
          border-[#222]
          py-[18px]
          mb-[35px]
          flex
          justify-between
          items-center
        "
      >
        <span
          className="
            text-[#555]
            text-[11px]
            tracking-[2px]
          "
        >
          06 PRODUCTS
        </span>

        <button
          className="
            bg-transparent
            text-[#777]
            border-none
            text-[12px]
            cursor-pointer
            transition-colors
            duration-300
            hover:text-white
          "
        >
          Sort by: Featured ↓
        </button>
      </div>

      {/* PRODUCT GRID */}
      <div
        className="
          grid
          grid-cols-3
          gap-x-[20px]
          gap-y-[45px]
          max-[1000px]:grid-cols-2
          max-[650px]:grid-cols-1
        "
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="cursor-pointer group"
          >
            {/* IMAGE */}
            <div
              className="
                h-[420px]
                bg-[#111]
                border
                border-[#1d1d1d]
                rounded-[12px]
                relative
                overflow-hidden
                flex
                items-center
                justify-center
                max-[650px]:h-[380px]
              "
            >
              {/* SHOE */}
              <div
                className="
                  text-[110px]
                  grayscale
                  opacity-80
                  rotate-[-12deg]
                  transition-transform
                  duration-500
                  ease-in-out
                  group-hover:scale-[1.12]
                "
              >
                👟
              </div>

              {/* NUMBER */}
              <span
                className="
                  absolute
                  top-[18px]
                  left-[18px]
                  text-[#555]
                  text-[11px]
                "
              >
                0{product.id}
              </span>

              {/* QUICK VIEW */}
              <button
                className="
                  absolute
                  bottom-[18px]
                  right-[18px]
                  bg-white
                  text-black
                  border-none
                  rounded-[30px]
                  px-[18px]
                  py-[11px]
                  text-[12px]
                  cursor-pointer
                  opacity-0
                  translate-y-[10px]
                  transition-all
                  duration-300
                  group-hover:opacity-100
                  group-hover:translate-y-0
                "
              >
                Quick View →
              </button>
            </div>

            {/* DETAILS */}
            <div
              className="
                flex
                justify-between
                items-start
                px-[2px]
                py-[18px]
                border-b
                border-[#222]
              "
            >
              <div>
                <h2
                  className="
                    text-[16px]
                    font-normal
                    mb-[6px]
                  "
                >
                  {product.name}
                </h2>

                <p className="text-[#666] text-[12px]">
                  {product.category}
                </p>
              </div>

              <span className="text-[#aaa] text-[13px]">
                {product.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WomenCollection;