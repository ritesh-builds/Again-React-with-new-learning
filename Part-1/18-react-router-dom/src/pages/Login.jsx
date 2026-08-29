import React, { useState } from "react";

function Login() {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <section
      className="
        min-h-screen
        bg-[#080808]
        text-white
        px-[8%]
        py-[80px]
        flex
        items-center
        max-[850px]:px-[25px]
        max-[850px]:py-[60px]
      "
    >
      <div
        className="
          w-full
          max-w-[1150px]
          mx-auto
          grid
          grid-cols-[1fr_450px]
          gap-[100px]
          items-center
          max-[850px]:grid-cols-1
          max-[850px]:gap-[50px]
        "
      >

        {/* BRAND */}
        <div>
          <span
            className="
              text-[11px]
              tracking-[5px]
              text-[#666]
            "
          >
            COMFORT FOOTWEAR
          </span>

          <h1
            className="
              text-[clamp(4rem,7vw,7rem)]
              leading-[0.85]
              font-normal
              tracking-[-5px]
              mt-[25px]
              mb-[30px]
              max-[850px]:text-[4.5rem]
              max-[850px]:tracking-[-3px]
            "
          >
            Step into
            <br />
            <strong className="text-[#666] font-normal">
              comfort.
            </strong>
          </h1>

          <p
            className="
              max-w-[430px]
              text-[#777]
              text-[14px]
              leading-[1.8]
            "
          >
            Your comfort is just one step away.
            Sign in to continue your journey with us.
          </p>
        </div>

        {/* AUTH BOX */}
        <div
          className="
            bg-[#0d0d0d]
            border
            border-[#222]
            rounded-[16px]
            p-[35px]
            max-[850px]:max-w-[500px]
            max-[850px]:w-full
            max-[850px]:mx-auto
          "
        >

          {/* TABS */}
          <div
            className="
              grid
              grid-cols-2
              gap-[5px]
              bg-[#080808]
              border
              border-[#1d1d1d]
              p-[5px]
              rounded-[8px]
            "
          >
            <button
              className={`
                border-none
                py-[11px]
                rounded-[6px]
                cursor-pointer
                text-[13px]
                transition-all
                duration-300
                ${
                  !isSignup
                    ? "bg-[#1a1a1a] text-white"
                    : "bg-transparent text-[#666]"
                }
              `}
              onClick={() => setIsSignup(false)}
            >
              Login
            </button>

            <button
              className={`
                border-none
                py-[11px]
                rounded-[6px]
                cursor-pointer
                text-[13px]
                transition-all
                duration-300
                ${
                  isSignup
                    ? "bg-[#1a1a1a] text-white"
                    : "bg-transparent text-[#666]"
                }
              `}
              onClick={() => setIsSignup(true)}
            >
              Sign Up
            </button>
          </div>

          {/* HEADING */}
          <div className="mt-[35px] mb-[28px]">
            <h2 className="text-[25px] font-normal mb-[8px]">
              {isSignup ? "Create account" : "Welcome back"}
            </h2>

            <p className="text-[#666] text-[13px]">
              {isSignup
                ? "Create your account to get started."
                : "Enter your details to continue."}
            </p>
          </div>

          {/* FULL NAME */}
          {isSignup && (
            <div className="mb-[18px]">
              <label
                className="
                  block
                  text-[#888]
                  text-[12px]
                  mb-[8px]
                "
              >
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="
                  w-full
                  box-border
                  py-[14px]
                  px-[15px]
                  bg-[#080808]
                  border
                  border-[#242424]
                  rounded-[7px]
                  outline-none
                  text-white
                  text-[13px]
                  font-inherit
                  transition-all
                  duration-300
                  placeholder:text-[#444]
                  focus:border-[#555]
                "
              />
            </div>
          )}

          {/* EMAIL */}
          <div className="mb-[18px]">
            <label
              className="
                block
                text-[#888]
                text-[12px]
                mb-[8px]
              "
            >
              Email
            </label>

            <input
              type="email"
              placeholder="you@example.com"
              className="
                w-full
                box-border
                py-[14px]
                px-[15px]
                bg-[#080808]
                border
                border-[#242424]
                rounded-[7px]
                outline-none
                text-white
                text-[13px]
                font-inherit
                transition-all
                duration-300
                placeholder:text-[#444]
                focus:border-[#555]
              "
            />
          </div>

          {/* PASSWORD */}
          <div className="mb-[18px]">
            <label
              className="
                block
                text-[#888]
                text-[12px]
                mb-[8px]
              "
            >
              Password
            </label>

            <input
              type="password"
              placeholder="••••••••"
              className="
                w-full
                box-border
                py-[14px]
                px-[15px]
                bg-[#080808]
                border
                border-[#242424]
                rounded-[7px]
                outline-none
                text-white
                text-[13px]
                font-inherit
                transition-all
                duration-300
                placeholder:text-[#444]
                focus:border-[#555]
              "
            />
          </div>

          {/* CONFIRM PASSWORD */}
          {isSignup && (
            <div className="mb-[18px]">
              <label
                className="
                  block
                  text-[#888]
                  text-[12px]
                  mb-[8px]
                "
              >
                Confirm Password
              </label>

              <input
                type="password"
                placeholder="••••••••"
                className="
                  w-full
                  box-border
                  py-[14px]
                  px-[15px]
                  bg-[#080808]
                  border
                  border-[#242424]
                  rounded-[7px]
                  outline-none
                  text-white
                  text-[13px]
                  font-inherit
                  transition-all
                  duration-300
                  placeholder:text-[#444]
                  focus:border-[#555]
                "
              />
            </div>
          )}

          {/* FORGOT PASSWORD */}
          {!isSignup && (
            <div className="text-right mt-[-5px] mb-[20px]">
              <button
                className="
                  border-none
                  bg-transparent
                  text-[#777]
                  cursor-pointer
                  text-[12px]
                  hover:text-white
                  transition-colors
                  duration-300
                "
              >
                Forgot password?
              </button>
            </div>
          )}

          {/* SUBMIT */}
          <button
            className="
              w-full
              py-[15px]
              border
              border-white
              rounded-[8px]
              bg-white
              text-black
              cursor-pointer
              text-[13px]
              transition-all
              duration-300
              hover:bg-transparent
              hover:text-white
            "
          >
            {isSignup ? "Create Account →" : "Login →"}
          </button>

          {/* SWITCH */}
          <div
            className="
              flex
              justify-center
              gap-[5px]
              mt-[25px]
              text-[12px]
              text-[#555]
            "
          >
            <span>
              {isSignup
                ? "Already have an account?"
                : "Don't have an account?"}
            </span>

            <button
              onClick={() => setIsSignup(!isSignup)}
              className="
                border-none
                bg-transparent
                text-[#aaa]
                cursor-pointer
                hover:text-white
                transition-colors
                duration-300
              "
            >
              {isSignup ? "Login" : "Sign Up"}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Login;