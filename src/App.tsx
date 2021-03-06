import React from "react";
import "./App.css";
import { Home } from "./Home/Home.js";
import { Chat } from "./Chat/Chat.js";
import { MenuButton } from "./MenuButton/MenuButton";

function App() {
  return (
    <div className="App">
      {/* <Home />
      <Chat /> */}
      <MenuButton />
    </div>
  );
}

export default App;
