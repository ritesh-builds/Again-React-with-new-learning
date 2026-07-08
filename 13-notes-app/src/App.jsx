import React, { useState } from "react";
import { Trash2, Pencil, Pin, Star, Search, Plus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

function App() {

  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(title, detail);

    const copyTask = [...task];
    console.log(task)
    copyTask.push({title, detail})
    console.log(copyTask);
    setTask(copyTask)
    console.log(task);
    
    setTitle('')
    setDetail('')
  };

  const titleInput = (evt) => {
    // console.log(evt.target.value);
    setTitle(evt.target.value)
  }

  const detailFun = (evt) => {
    // console.log(evt.target.value);
    setDetail(evt.target.value)
  }

  const deleteNote = (idx) => {
    console.log(idx);
    const copyTask = [...task];
    copyTask.splice(idx, 1)
    setTask(copyTask)
    // setTask(task.splice(idx, 1))
  }

  return (
    <div className="min-h-screen bg-black text-white p-6 lg:p-10 lg:flex gap-8">

      {/* Left Section */}
      <form
        onSubmit={submitHandler}
        className="w-full lg:w-1/2 flex flex-col gap-5"
      >
        <h1 className="text-3xl font-bold">Add Notes</h1>
        {/* pehla input for heading */}
        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="w-full border border-gray-500 rounded-lg px-4 py-3 outline-none focus:border-violet-500"
          value={title}
          onChange={(evt) => {
            titleInput(evt)
          }}
        />
        {/* detail wala input  */}
        <textarea
          placeholder="Write details here..."
          className="w-full h-40 border border-gray-500 rounded-lg px-4 py-3 outline-none resize-none focus:border-violet-500 scrollbar-none"
          value={detail}
          onChange={(evt) => {
            detailFun(evt)
          }}
        >
        </textarea>

        <button
          className="w-full bg-orange-600 hover:bg-orange-700 active:bg-orange-800 rounded-lg py-3 font-semibold cursor-pointer transition"
        >
          Add Note
        </button>
      </form>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 bg-zinc-900 rounded-xl p-6 mt-8 lg:mt-0">
        <h1 className="text-3xl font-bold mb-6">Recent Notes</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[70vh] overflow-y-auto scrollbar-none">
          <AnimatePresence>
          {task.map((data, idx) => {
            if(data.title == '' || data.detail == ''){
              return <h1 className="text-red-600 text-shadow-2xs text-shadow-red-300 text-3xl">Bhosdike ismein kuch likh toh le!!</h1>
            }
      
              return (
                        <motion.div 
                        key={idx}
                        exit={{
                          opacity: 0,
                          scale: 0,
                          rotate: 20,
                          y: -40,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                        initial={{
                          opacity: 0,
                          y: -80,
                          rotate: 0,
                          scale: 1,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          rotate: 0,
                          scale: 1,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 120,
                          damping: 12,
                        }}
                        className="relative w-64 h-72"
                        >
                          <img
                            src="https://static.vecteezy.com/system/resources/previews/037/152/709/non_2x/sticky-note-paper-background-free-png.png"
                            className="w-full h-auto object-contain"
                            alt="note"
                          />

                          <div className="absolute top-8 left-7 right-7 h-48 overflow-hidden">
                            <div className="flex gap-4">
                              <Trash2
                                  className="
                                    absolute top-0 right-0
                                    text-black
                                    cursor-pointer
                                    p-1
                                    rounded-full
                                    transition-all
                                    duration-300
                                    hover:bg-red-100
                                    hover:text-red-600
                                    hover:scale-110
                                    active:scale-95
                                  "
                                  size={30}
                                  onClick={(evt) => {
                                    deleteNote(idx)
                                  }}
                                />
                               
                            </div>
                            <h2 className="font-bold text-black text-lg ">
                              {data.title}
                            </h2>

                            <p className="text-gray-400 mt-2 text-sm font-bold overflow-hidden">
                              {data.detail}
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
        </div>
      </div>

    </div>
  );
}

export default App;


{/* <h2 className="font-bold text-lg">Title</h2>
            <p className="text-sm text-gray-300 mt-2">
              Note description...
            </p> */}



// notes animation 

  //           key={idx}
  // initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
  // animate={{ opacity: 1, scale: 1, rotate: 0 }}
  // transition={{
  //   type: "spring",
  //   stiffness: 180,
  //   damping: 12,
  // }}
  // className="relative w-64 h-72"