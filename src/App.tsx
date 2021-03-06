import React from "react";
import "./App.css";
import { Home } from "./Home/Home.js";
import { Chat } from "./Chat/Chat.js";
import { MenuButton } from "./MenuButton/MenuButton";
import { MenuTop } from "./MenuTop/MenuTop";

function App() {
  return (
    <div className="App">
      {/* <Home />
      <Chat /> 
      <MenuButton />*/}
      <MenuTop />
    </div>
  );
}

export default App;
