import React from "react";
import "./App.css";
import { Home } from "./Home/Home.js";
import { Chat } from "./Chat/Chat.js";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Home />
      <Chat/>
    </div>
  );
}

export default App;
