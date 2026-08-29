import React from "react";
import { useTheme } from "../context/ThemeContext";

function Contact() {
  const { darkMode } = useTheme();

  return (
    <section
      className={`
        min-h-screen
        px-[8%]
        py-[100px]
        flex
        items-center
        transition-all
        duration-300
        max-[800px]:px-[25px]
        max-[800px]:py-[70px]

        ${
          darkMode
            ? "bg-[#080808] text-white"
            : "bg-[#f5f5f5] text-black"
        }
      `}
    >
      <div className="w-full max-w-[1250px] mx-auto">

        {/* HEADING */}
        <div className="mb-[70px]">

          <span
            className={`
              text-[12px]
              tracking-[4px]
              ${
                darkMode
                  ? "text-[#777]"
                  : "text-[#777]"
              }
            `}
          >
            GET IN TOUCH
          </span>

          <h1
            className="
              text-[clamp(4rem,8vw,8rem)]
              leading-[0.9]
              font-normal
              tracking-[-5px]
              my-[25px]
              max-[800px]:tracking-[-3px]
            "
          >
            Let's talk
            <br />

            <strong
              className={`
                font-normal
                ${
                  darkMode
                    ? "text-[#666]"
                    : "text-[#888]"
                }
              `}
            >
              footwear.
            </strong>
          </h1>

          <p
            className={`
              max-w-[480px]
              leading-[1.7]
              text-[15px]
              ${
                darkMode
                  ? "text-[#888]"
                  : "text-[#666]"
              }
            `}
          >
            Have a question, suggestion, or just want to say hello?
            We'd love to hear from you.
          </p>

        </div>

        {/* CONTENT */}
        <div
          className="
            grid
            grid-cols-[0.7fr_1.3fr]
            gap-[100px]
            max-[800px]:grid-cols-1
            max-[800px]:gap-[60px]
          "
        >

          {/* INFO */}
          <div className="flex flex-col gap-[35px]">

            <div>
              <span
                className={`
                  block
                  text-[12px]
                  uppercase
                  tracking-[2px]
                  mb-[8px]
                  ${
                    darkMode
                      ? "text-[#555]"
                      : "text-[#888]"
                  }
                `}
              >
                Email
              </span>

              <p
                className={`
                  m-0
                  text-[14px]
                  ${
                    darkMode
                      ? "text-[#ccc]"
                      : "text-[#333]"
                  }
                `}
              >
                hello@comfortfootwear.com
              </p>
            </div>

            <div>
              <span
                className={`
                  block
                  text-[12px]
                  uppercase
                  tracking-[2px]
                  mb-[8px]
                  ${
                    darkMode
                      ? "text-[#555]"
                      : "text-[#888]"
                  }
                `}
              >
                Phone
              </span>

              <p
                className={`
                  m-0
                  text-[14px]
                  ${
                    darkMode
                      ? "text-[#ccc]"
                      : "text-[#333]"
                  }
                `}
              >
                +91 98765-43210
              </p>
            </div>

            <div>
              <span
                className={`
                  block
                  text-[12px]
                  uppercase
                  tracking-[2px]
                  mb-[8px]
                  ${
                    darkMode
                      ? "text-[#555]"
                      : "text-[#888]"
                  }
                `}
              >
                Location
              </span>

              <p
                className={`
                  m-0
                  text-[14px]
                  ${
                    darkMode
                      ? "text-[#ccc]"
                      : "text-[#333]"
                  }
                `}
              >
                New Delhi, India
              </p>
            </div>

          </div>

          {/* FORM */}
          <form className="flex flex-col gap-[18px]">

            {/* NAME + EMAIL */}
            <div
              className="
                grid
                grid-cols-2
                gap-[18px]
                max-[800px]:grid-cols-1
              "
            >

              <input
                type="text"
                placeholder="Your Name"
                className={`
                  w-full
                  box-border
                  border
                  px-[18px]
                  py-[17px]
                  text-[14px]
                  outline-none
                  rounded-[8px]
                  transition-all
                  duration-300
                  font-inherit

                  ${
                    darkMode
                      ? `
                        bg-[#0e0e0e]
                        border-[#222]
                        text-white
                        placeholder:text-[#555]
                        focus:border-[#555]
                        focus:bg-[#111]
                      `
                      : `
                        bg-white
                        border-[#ddd]
                        text-black
                        placeholder:text-[#999]
                        focus:border-[#999]
                        focus:bg-[#fafafa]
                      `
                  }
                `}
              />

              <input
                type="email"
                placeholder="Your Email"
                className={`
                  w-full
                  box-border
                  border
                  px-[18px]
                  py-[17px]
                  text-[14px]
                  outline-none
                  rounded-[8px]
                  transition-all
                  duration-300
                  font-inherit

                  ${
                    darkMode
                      ? `
                        bg-[#0e0e0e]
                        border-[#222]
                        text-white
                        placeholder:text-[#555]
                        focus:border-[#555]
                        focus:bg-[#111]
                      `
                      : `
                        bg-white
                        border-[#ddd]
                        text-black
                        placeholder:text-[#999]
                        focus:border-[#999]
                        focus:bg-[#fafafa]
                      `
                  }
                `}
              />

            </div>

            {/* SUBJECT */}
            <input
              type="text"
              placeholder="Subject"
              className={`
                w-full
                box-border
                border
                px-[18px]
                py-[17px]
                text-[14px]
                outline-none
                rounded-[8px]
                transition-all
                duration-300
                font-inherit

                ${
                  darkMode
                    ? `
                      bg-[#0e0e0e]
                      border-[#222]
                      text-white
                      placeholder:text-[#555]
                      focus:border-[#555]
                      focus:bg-[#111]
                    `
                    : `
                      bg-white
                      border-[#ddd]
                      text-black
                      placeholder:text-[#999]
                      focus:border-[#999]
                      focus:bg-[#fafafa]
                    `
                }
              `}
            />

            {/* MESSAGE */}
            <textarea
              placeholder="Tell us something..."
              rows="5"
              className={`
                w-full
                box-border
                border
                px-[18px]
                py-[17px]
                text-[14px]
                outline-none
                rounded-[8px]
                transition-all
                duration-300
                font-inherit
                resize-y

                ${
                  darkMode
                    ? `
                      bg-[#0e0e0e]
                      border-[#222]
                      text-white
                      placeholder:text-[#555]
                      focus:border-[#555]
                      focus:bg-[#111]
                    `
                    : `
                      bg-white
                      border-[#ddd]
                      text-black
                      placeholder:text-[#999]
                      focus:border-[#999]
                      focus:bg-[#fafafa]
                    `
                }
              `}
            ></textarea>

            {/* BUTTON */}
            <button
              type="submit"
              className={`
                self-start
                px-[25px]
                py-[15px]
                border
                rounded-[30px]
                text-[14px]
                cursor-pointer
                transition-all
                duration-300

                ${
                  darkMode
                    ? `
                      border-white
                      bg-white
                      text-black
                      hover:bg-transparent
                      hover:text-white
                      hover:border-[#666]
                    `
                    : `
                      border-black
                      bg-black
                      text-white
                      hover:bg-transparent
                      hover:text-black
                      hover:border-black
                    `
                }
              `}
            >
              Send Message →
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;

