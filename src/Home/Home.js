import React from "react";
import "./Home.css";
import hertechconnect from "./hertechconnect.png";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="homeWrapper">
      <Link to="/signup">
        <img className="imageLogoHerTechConnect" src={hertechconnect} />
      </Link>
    </div>
  );
}
