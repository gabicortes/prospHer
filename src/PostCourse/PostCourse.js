import React from "react";
import "./PostCourse.css";
import { MenuTop } from "../MenuTop/MenuTop.js";
import { MenuBottom } from "../MenuBottom/MenuBottom.js";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import womanCoding from "./womanCoding.png";

export function PostCourse() {
  return (
    <div>
      <MenuTop />
      <Link to="/learnHTML">
        <IoIosArrowBack className="arrowBack" />
      </Link>
      <div>Step 1 - HTML 5</div>
      <div>By Cindy Mentor, Sr. Web Developer</div>
      <img className="imageHTML" src={womanCoding} />
      <div className="textLearnHTML">
        Overview of the Step 1 and the content. Article with some great insights
        for new Web Developers, including a checklist.
      </div>
      <div className="chatPostCourse">
        <div className="chatBuble1">
          <div className="Developer">New Web Developer</div>
          <div className="questions">Questions about the content</div>
        </div>
        <div className="chatBuble2">
          <div className="Developer">Cindy Mentor</div>
          <div className="questions">Response to question</div>
        </div>
      </div>
      <div className="buttonsBottom">
        <div className="buttonEnd">COMENT</div>
        <div className="buttonEnd">POST</div>
      </div>
      <MenuBottom />
    </div>
  );
}
