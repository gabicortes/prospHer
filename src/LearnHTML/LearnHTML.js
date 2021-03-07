import react, { useState } from "react";
import "./LearnHTML.css";
import { MenuTop } from "../MenuTop/MenuTop.js";
import { MenuBottom } from "../MenuBottom/MenuBottom.js";
import { Link } from "react-router-dom";
import { IoStarSharp, IoStarOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";

export function LearnHTML() {
  const [starOn, setStarOn] = useState(true);

  const handleClickEmptyStar = () => {
    setStarOn(false);
  };

  const handleClickFilledStar = () => {
    setStarOn(true);
  };

  return (
    <div>
      <MenuTop />
      <Link to="/recommendedLearningPath">
        <IoIosArrowBack className="arrowBack" />
      </Link>
      <div className="titleAndFav">
        <div className="titleLearning">Learn HTML 5</div>
        {starOn ? (
          <IoStarOutline className="starIcon" onClick={handleClickEmptyStar} />
        ) : (
          <IoStarSharp className="starIcon" onClick={handleClickFilledStar} />
        )}
      </div>
      <div className="wrapperLearningPath">
        <div className="learningPath">Learning Path (2/2)</div>
        <hr />
        <div className="stepsLearningList">
          <div className="stepOneWrapper">
            <div className="titleStep">Step 1</div>
            <div className="subtitleStep">
              Fundamentals of HTML 5 in real-life
            </div>
            <div className="descriptionTextStep">
              HTML Text Fundamentals, Creating hyperlinks, Document and website
              structure
            </div>
          </div>
          <div className="stepTwoWrapper">
            <div className="titleStep">Step 2</div>

            <div className="subtitleStep">HTML Syntax</div>
            <div className="descriptionTextStep">
              Tables, Forms, Semantic HTML
            </div>
          </div>
        </div>
        <Link to="/postCourse">
          <div className="buttonPurple">Get Started</div>
        </Link>
      </div>
      <MenuBottom />
    </div>
  );
}
