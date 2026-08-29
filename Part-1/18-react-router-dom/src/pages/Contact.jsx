import React from "react";

function Contact() {
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
      <div className="w-full max-w-[1250px] mx-auto">

        {/* HEADING */}
        <div className="mb-[70px]">
          <span
            className="
              text-[12px]
              tracking-[4px]
              text-[#777]
            "
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
            <strong className="text-[#666] font-normal">
              footwear.
            </strong>
          </h1>

          <p
            className="
              max-w-[480px]
              text-[#888]
              leading-[1.7]
              text-[15px]
            "
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
                className="
                  block
                  text-[#555]
                  text-[12px]
                  uppercase
                  tracking-[2px]
                  mb-[8px]
                "
              >
                Email
              </span>

              <p className="m-0 text-[#ccc] text-[14px]">
                hello@comfortfootwear.com
              </p>
            </div>

            <div>
              <span
                className="
                  block
                  text-[#555]
                  text-[12px]
                  uppercase
                  tracking-[2px]
                  mb-[8px]
                "
              >
                Phone
              </span>

              <p className="m-0 text-[#ccc] text-[14px]">
                +91 98765-43210
              </p>
            </div>

            <div>
              <span
                className="
                  block
                  text-[#555]
                  text-[12px]
                  uppercase
                  tracking-[2px]
                  mb-[8px]
                "
              >
                Location
              </span>

              <p className="m-0 text-[#ccc] text-[14px]">
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
                className="
                  w-full
                  box-border
                  bg-[#0e0e0e]
                  border
                  border-[#222]
                  text-white
                  px-[18px]
                  py-[17px]
                  text-[14px]
                  outline-none
                  rounded-[8px]
                  transition-all
                  duration-300
                  font-inherit
                  placeholder:text-[#555]
                  focus:border-[#555]
                  focus:bg-[#111]
                "
              />

              <input
                type="email"
                placeholder="Your Email"
                className="
                  w-full
                  box-border
                  bg-[#0e0e0e]
                  border
                  border-[#222]
                  text-white
                  px-[18px]
                  py-[17px]
                  text-[14px]
                  outline-none
                  rounded-[8px]
                  transition-all
                  duration-300
                  font-inherit
                  placeholder:text-[#555]
                  focus:border-[#555]
                  focus:bg-[#111]
                "
              />
            </div>

            {/* SUBJECT */}
            <input
              type="text"
              placeholder="Subject"
              className="
                w-full
                box-border
                bg-[#0e0e0e]
                border
                border-[#222]
                text-white
                px-[18px]
                py-[17px]
                text-[14px]
                outline-none
                rounded-[8px]
                transition-all
                duration-300
                font-inherit
                placeholder:text-[#555]
                focus:border-[#555]
                focus:bg-[#111]
              "
            />

            {/* MESSAGE */}
            <textarea
              placeholder="Tell us something..."
              rows="5"
              className="
                w-full
                box-border
                bg-[#0e0e0e]
                border
                border-[#222]
                text-white
                px-[18px]
                py-[17px]
                text-[14px]
                outline-none
                rounded-[8px]
                transition-all
                duration-300
                font-inherit
                resize-y
                placeholder:text-[#555]
                focus:border-[#555]
                focus:bg-[#111]
              "
            ></textarea>

            {/* BUTTON */}
            <button
              type="submit"
              className="
                self-start
                px-[25px]
                py-[15px]
                border
                border-[#444]
                rounded-[30px]
                bg-white
                text-black
                text-[14px]
                cursor-pointer
                transition-all
                duration-300
                hover:bg-transparent
                hover:text-white
                hover:border-[#666]
              "
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

