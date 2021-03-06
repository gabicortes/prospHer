import React from "react";
import "./NavBar.css";
import WomanCodingImg from "./WomanCodingImg.png";

export function NavBar() {
  return (
    <div className="navBarWrapper">
      <img className="logoHerTechConnectImg" src={WomanCodingImg} />
      <div className="buttonsNavBar">
        <div className="buttonIndividualNavBar">ABOUT US</div>
        <div className="buttonIndividualNavBar">TESTIMONIALS</div>
        <div className="buttonIndividualNavBar">SOCIAL MEDIA</div>
        <div className="buttonIndividualNavBar">NEWS</div>
        <div className="buttonIndividualNavBar">LOGIN</div>
      </div>
    </div>
  );
}
