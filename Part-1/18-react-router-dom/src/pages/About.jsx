import React from "react";

function About() {
  return (
    <section
      className="
        min-h-screen
        bg-[#080808]
        text-white
        px-[8%]
        py-[100px]
        flex
        items-center
        max-[800px]:px-[25px]
        max-[800px]:py-[70px]
      "
    >
      <div
        className="
          w-full
          max-w-[1250px]
          mx-auto
          grid
          grid-cols-[1.2fr_0.8fr]
          gap-[100px]
          items-center
          max-[800px]:grid-cols-1
          max-[800px]:gap-[60px]
        "
      >
        {/* LEFT SIDE */}
        <div className="max-w-[650px]">
          <span
            className="
              inline-block
              text-[12px]
              tracking-[4px]
              text-[#888]
              mb-[25px]
            "
          >
            ABOUT US
          </span>

          <h1
            className="
              text-[clamp(3rem,6vw,6rem)]
              leading-[0.95]
              font-medium
              tracking-[-4px]
              m-0
              mb-[35px]
              max-[800px]:tracking-[-2px]
            "
          >
            Comfort that moves
            <span className="text-[#777]"> with you.</span>
          </h1>

          <p
            className="
              text-[#999]
              text-[16px]
              leading-[1.8]
              max-w-[580px]
              mb-[18px]
            "
          >
            We believe great footwear should feel as good as it looks.
            Our shoes are designed with a focus on everyday comfort,
            timeless style, and quality you can rely on.
          </p>

          <p
            className="
              text-[#999]
              text-[16px]
              leading-[1.8]
              max-w-[580px]
              mb-[18px]
            "
          >
            From your morning walk to your everyday adventures,
            Comfort Footwear is made to keep you moving effortlessly.
          </p>

          <button
            className="
              mt-[20px]
              px-[24px]
              py-[14px]
              border
              border-[#444]
              bg-transparent
              text-white
              rounded-[30px]
              cursor-pointer
              text-[14px]
              transition-all
              duration-300
              hover:bg-white
              hover:text-black
              hover:border-white
            "
          >
            Discover Our Story →
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div
          className="
            flex
            flex-col
            gap-[18px]
          "
        >
          {/* CARD 01 */}
          <div
            className="
              p-[28px]
              border
              border-[#222]
              bg-[#0e0e0e]
              rounded-[14px]
              transition-all
              duration-300
              hover:-translate-x-[8px]
              hover:border-[#444]
              hover:bg-[#121212]
            "
          >
            <h2
              className="
                text-[13px]
                font-normal
                text-[#666]
                m-0
                mb-[20px]
              "
            >
              01
            </h2>

            <h3
              className="
                text-[20px]
                font-medium
                m-0
                mb-[10px]
              "
            >
              Designed for Comfort
            </h3>

            <p
              className="
                text-[#777]
                leading-[1.6]
                text-[14px]
                m-0
              "
            >
              Thoughtful designs made to keep your feet comfortable all day.
            </p>
          </div>

          {/* CARD 02 */}
          <div
            className="
              p-[28px]
              border
              border-[#222]
              bg-[#0e0e0e]
              rounded-[14px]
              transition-all
              duration-300
              hover:-translate-x-[8px]
              hover:border-[#444]
              hover:bg-[#121212]
            "
          >
            <h2
              className="
                text-[13px]
                font-normal
                text-[#666]
                m-0
                mb-[20px]
              "
            >
              02
            </h2>

            <h3
              className="
                text-[20px]
                font-medium
                m-0
                mb-[10px]
              "
            >
              Made for Everyday
            </h3>

            <p
              className="
                text-[#777]
                leading-[1.6]
                text-[14px]
                m-0
              "
            >
              Versatile footwear that fits naturally into your daily life.
            </p>
          </div>

          {/* CARD 03 */}
          <div
            className="
              p-[28px]
              border
              border-[#222]
              bg-[#0e0e0e]
              rounded-[14px]
              transition-all
              duration-300
              hover:-translate-x-[8px]
              hover:border-[#444]
              hover:bg-[#121212]
            "
          >
            <h2
              className="
                text-[13px]
                font-normal
                text-[#666]
                m-0
                mb-[20px]
              "
            >
              03
            </h2>

            <h3
              className="
                text-[20px]
                font-medium
                m-0
                mb-[10px]
              "
            >
              Style Meets Quality
            </h3>

            <p
              className="
                text-[#777]
                leading-[1.6]
                text-[14px]
                m-0
              "
            >
              Modern aesthetics combined with dependable craftsmanship.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
