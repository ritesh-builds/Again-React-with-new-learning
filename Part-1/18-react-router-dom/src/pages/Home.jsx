import React from "react";

function Home() {
  return (
    <main
      className="
        min-h-screen
        bg-[#080808]
        text-white
        relative
        overflow-hidden
        flex
        items-center
        px-[8%]
        max-[900px]:px-[25px]
        max-[900px]:py-[100px]
        max-[900px]:items-start
      "
    >
      {/* MAIN CONTENT */}
      <div className="relative z-2 max-w-[700px] max-[900px]:mt-[80px]">
        <span className="text-[12px] tracking-[5px] text-[#777]">
          COMFORT FOOTWEAR
        </span>

        <h1
          className="
            text-[clamp(5rem,11vw,11rem)]
            leading-[0.82]
            font-normal
            tracking-[-8px]
            my-[30px]
            max-[900px]:text-[clamp(4.5rem,18vw,8rem)]
            max-[900px]:tracking-[-5px]
          "
        >
          Walk in
          <br />
          <span className="text-[#666]">comfort.</span>
        </h1>

        <p
          className="
            max-w-[430px]
            text-[#888]
            text-[15px]
            leading-[1.8]
          "
        >
          Footwear designed for the way you move.
          Simple, comfortable, and made for every day.
        </p>

        {/* BUTTONS */}
        <div className="flex gap-[15px] mt-[35px]">
          <button
            className="
              px-[25px]
              py-[15px]
              rounded-[30px]
              text-[17px]
              cursor-pointer
              transition-all
              duration-300
              bg-white
              text-black
              border
              border-white
              hover:bg-transparent
              hover:text-white
            "
          >
            Shop Collection →
          </button>

          <button
            className="
              px-[25px]
              py-[15px]
              rounded-[30px]
              text-[17px]
              cursor-pointer
              transition-all
              duration-300
              bg-transparent
              text-white
              border
              border-[#333]
              hover:border-[#777]
            "
          >
            Explore
          </button>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div
        className="
          absolute
          right-[7%]
          top-1/2
          -translate-y-1/2
          w-[42vw]
          h-[42vw]
          max-w-[600px]
          max-h-[600px]
          max-[900px]:w-[70vw]
          max-[900px]:h-[70vw]
          max-[900px]:right-[-20%]
          max-[900px]:top-[65%]
          max-[900px]:opacity-70
        "
      >
        {/* CIRCLE */}
        <div
          className="
            w-full
            h-full
            rounded-full
            bg-[#111]
            border
            border-[#222]
            relative
            after:content-['']
            after:absolute
            after:inset-[12%]
            after:rounded-full
            after:border
            after:border-[#222]
          "
        ></div>

        {/* TEXT */}
        <div
          className="
            absolute
            right-[10%]
            bottom-[15%]
            text-right
          "
        >
          <span className="text-[11px] text-[#555]">
            01
          </span>

          <p
            className="
              text-[11px]
              tracking-[3px]
              leading-[1.6]
              text-[#777]
            "
          >
            EVERY STEP
            <br />
            MATTERS
          </p>
        </div>
      </div>

      {/* BOTTOM */}
      <div
        className="
          absolute
          bottom-[30px]
          left-[8%]
          right-[8%]
          flex
          justify-between
          text-[#444]
          text-[10px]
          tracking-[2px]
          max-[900px]:left-[25px]
          max-[900px]:right-[25px]
        "
      >
        <span>EST. 2026</span>

        <span className="max-[900px]:hidden">
          EVERYDAY / EVERYWHERE
        </span>

        <span>SCROLL ↓</span>
      </div>
    </main>
  );
}

export default Home;
