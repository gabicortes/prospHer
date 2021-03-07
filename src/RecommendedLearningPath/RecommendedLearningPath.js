import React from "react";
import "./RecommendedLearningPath.css";
import { MenuTop } from "../MenuTop/MenuTop.js";
import { MenuBottom } from "../MenuBottom/MenuBottom.js";
import codingImg from "./codingImg.png";
import { Link } from "react-router-dom";

export function RecommendedLearningPath() {
  return (
    <div className="learningPathWrapper">
      <MenuTop />
      <div className="titleRecommendedLearningPaths">
        Recommended Learning Paths
      </div>
      <img className="imageHTML" src={codingImg} />
      <div className="textBehindImg">
        <div className="titleLearnHTML">Learn HTML 5</div>
        <div className="subtitleLearnHTML">
          By Cindy Mentor, Sr. Web Developer
        </div>
        <div className="textLearnHTML">
          This learning path will allow you to learn he fundamentals of how to
          use HTML 5 in real-life solutions, and my insights on daily life as a
          developer.
        </div>
      </div>
      <Link to="/learnHTML">
        <div className="buttonPurple">Learn More</div>
      </Link>
      <MenuBottom />
    </div>
  );
}
