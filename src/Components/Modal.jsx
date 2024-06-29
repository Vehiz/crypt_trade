import React from "react";
import { useGlobalContext } from "../context/Context";
import { FaTimes } from "react-icons/fa";

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  return (
    <div
      className={` ${
        isModalOpen
          ? "opacity-[1] visible z-10 transition-opacity duration-[2s]"
          : "bg-[rgba(0,0,0,0.5)]fixed grid place-items-center w-[100%] invisible z-[1] opacity-0"
      } `}
    >
      <div className="bg-white grid w-[90vw] h-[30vh] text-center relative place-items-center">
        <h3>Modal content</h3>
        <button
          className="absolute bg-transparent border-transparent cursor-pointer top-1 right-1 text-[25px]"
          onClick={closeModal}
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
