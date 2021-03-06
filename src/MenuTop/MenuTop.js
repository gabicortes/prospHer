import React from "react";
import "./MenuTop.css";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

export function MenuTop() {
  return (
    <div>
      <div className="menuTopWrapper">
        <input className="inputMenuTop" placeholder="🔍 Search" />
        <IoChatbubbleEllipsesOutline className="iconChatBubble" />
      </div>
      <hr />
    </div>
  );
}
