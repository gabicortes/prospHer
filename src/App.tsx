import React from "react";
import "./App.css";
import { Home } from "./Home/Home.js";
import { Chat } from "./Chat/Chat.js";
import { MenuButton } from "./MenuButton/MenuButton";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";





function App() {
  return (
    <div className="App">
          <Home />
          <Chat />
              <MenuButton />
    </div>
  );
}

export default App;
