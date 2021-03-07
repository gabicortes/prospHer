import React from "react";
import "./MenuBottom.css";
import { IoIosHome, IoMdPerson } from "react-icons/io";
import { IoStarSharp } from "react-icons/io5";
import { BsPlusCircle } from "react-icons/bs";
import { AiOutlineBell } from "react-icons/ai";

export function MenuBottom() {
  return (
    <div className="menuButtonWrapperBottom">
      <IoIosHome className="buttonIconMenuBottom" />
      <IoStarSharp className="buttonIconMenuBottom" />
      <BsPlusCircle className="buttonIconMenuBottom" />
      <AiOutlineBell className="buttonIconMenuBottom" />
      <IoMdPerson className="buttonIconMenuBottom" />
    </div>
  );
}
