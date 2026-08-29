import React from "react";
import { useTheme } from "../context/ThemeContext";

function Home() {
  const { darkMode } = useTheme();

  return (
    <main
      className={`
        min-h-screen
        relative
        overflow-hidden
        flex
        items-center
        px-[8%]
        max-[900px]:px-[25px]
        max-[900px]:py-[100px]
        max-[900px]:items-start

        ${
          darkMode
            ? "bg-[#080808] text-white"
            : "bg-[#f5f5f5] text-black"
        }
      `}
    >
      {/* CONTENT */}
      <div className="relative z-[2] max-w-[700px]">
        
        <span
          className={
            darkMode
              ? "text-[12px] tracking-[5px] text-[#777]"
              : "text-[12px] tracking-[5px] text-[#888]"
          }
        >
          COMFORT FOOTWEAR
        </span>

        <h1
          className="
            text-[clamp(5rem,11vw,11rem)]
            leading-[0.82]
            font-normal
            tracking-[-8px]
            my-[30px]
          "
        >
          Walk in
          <br />

          <span className={darkMode ? "text-[#666]" : "text-[#888]"}>
            comfort.
          </span>
        </h1>

        <p
          className={
            darkMode
              ? "max-w-[430px] text-[#888] text-[15px] leading-[1.8]"
              : "max-w-[430px] text-[#666] text-[15px] leading-[1.8]"
          }
        >
          Footwear designed for the way you move.
          Simple, comfortable, and made for every day.
        </p>

      </div>
    </main>
  );
}

export default Home;