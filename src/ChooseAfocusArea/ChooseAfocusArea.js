import react, { useState } from "react";
import "./ChooseAfocusArea.css";
import { Link } from "react-router-dom";

export function ChooseAfocusArea() {
  const [selection, setSelection] = useState(undefined);
  const [selectionLevel, setSelectionLevel] = useState(undefined);

  const handleClick = (position) => {
    setSelection(position);
  };

  const handleClickLevel = (position) => {
    setSelectionLevel(position);
  };

  const getClassname = (position) => {
    return selection === position ? "techSelected" : "areaTech";
  };

  const getClassnameLevel = (position) => {
    return selectionLevel === position ? "techSelected" : "levelTech";
  };

  return (
    <div className="focusAreaWrapper">
      <div className="focusAreaTitle">Choose a Focus Area</div>
      <div className="focusAreaSubTitle">
        Select your specialisation and skill level:
      </div>
      <div className="areasTechList">
        <span onClick={() => handleClick(0)} className={getClassname(0)}>
          UI Designer
        </span>
        <span onClick={() => handleClick(1)} className={getClassname(1)}>
          UX Designer
        </span>
        <span onClick={() => handleClick(2)} className={getClassname(2)}>
          Web Developer
        </span>
        <span onClick={() => handleClick(3)} className={getClassname(3)}>
          Data Scientist
        </span>
        <span onClick={() => handleClick(4)} className={getClassname(4)}>
          Other
        </span>
      </div>
      <div className="levelTechList">
        <span
          onClick={() => handleClickLevel(5)}
          className={getClassnameLevel(5)}
        >
          Beginner
        </span>
        <span
          onClick={() => handleClickLevel(6)}
          className={getClassnameLevel(6)}
        >
          Intermediate
        </span>
        <span
          onClick={() => handleClickLevel(7)}
          className={getClassnameLevel(7)}
        >
          Advanced
        </span>
      </div>
      <Link to="/recommendedLearningPath">
        <div className="buttonPurple saveButton">SAVE</div>
      </Link>
    </div>
  );
}
