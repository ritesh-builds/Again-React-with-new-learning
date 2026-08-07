{/* <h2 className="font-bold text-lg">Title</h2>
            <p className="text-sm text-gray-300 mt-2">
              Note description...
            </p> */}


Card-1

{/* <div
  className="
    w-72 min-h-80
    bg-[#faf7f2]
    text-black
    rounded-xl
    shadow-lg
    border border-gray-300
    p-5
    transition-all
    duration-300
    hover:scale-[1.02]
    hover:shadow-2xl
  "
>
  <h2 className="text-xl font-bold">
    {data.title}
  </h2>

  <hr className="my-3 border-gray-300" />

  <p className="text-gray-700 leading-7 whitespace-pre-wrap">
    {data.detail}
  </p>
</div> */}

card-2

<div key={idx} className="relative w-64 h-72">
                          <img
                            src="https://static.vecteezy.com/system/resources/previews/037/152/709/non_2x/sticky-note-paper-background-free-png.png"
                            className="w-full h-auto object-contain"
                            alt="note"
                          />

                          <div className="absolute top-8 left-7 right-7 h-48 overflow-hidden">
                            <h2 className="font-bold text-black text-lg ">
                              {data.title}
                            </h2>

                            <p className="text-gray-700 mt-2 text-sm overflow-hidden">
                              {data.detail}
                            </p>
                          </div>
                        </div>