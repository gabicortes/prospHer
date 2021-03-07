import React from "react";
import "./MenuTop.css";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export function MenuTop() {
  return (
    <div>
      <div className="menuTopWrapper">
        <input className="inputMenuTop" placeholder="🔍 Search" />
        <Link to="/chatWithUs">
          <IoChatbubbleEllipsesOutline className="iconChatBubble" />
        </Link>
      </div>
      <hr />
    </div>
  );
}
