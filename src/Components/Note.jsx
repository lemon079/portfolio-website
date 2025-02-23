import React from "react";
import { IoMdClose } from "react-icons/io";

const Note = ({ isNoteOpen, setIsNoteOpen }) => {
  return (
    <div
      className={`${
        isNoteOpen ? "block" : "hidden"
      } fixed inset-0 flex flex-col items-center justify-center z-50 bg-opacity-50 backdrop-blur-md`}
    >
      <div className="p-6 bg-white rounded-lg shadow-lg max-w-sm text-center">
        <IoMdClose
          size={24}
          className="cursor-pointer w-fit ml-auto"
          onClick={() => setIsNoteOpen(false)}
        />
        <h2 className="text-lg font-bold">Hey there! 👋 </h2>
        <p className="mt-2 text-gray-700">
          Your feedback means the world to me! If you have any suggestions,
          ideas, or just want to share your thoughts, feel free to reach out via
          LinkedIn or you can just mail me.
        </p>
        <p className="mt-2 text-gray-700">
          I'm always looking to improve, so let me know how I can make things
          better! 🚀
        </p>
        <p className="text-gray-300 bg-black  border-[1px] p-3 rounded-xl w-fit mx-auto mt-5">
          Building in Progress..
        </p>
      </div>
    </div>
  );
};

export default Note;
