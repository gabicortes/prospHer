import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import DummyMessageList from "./DummyMessageList.tsx";
import { MenuTop } from "../MenuTop/MenuTop.js";
import { MenuBottom } from "../MenuBottom/MenuBottom.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Chat.css";
import { FiCamera } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

export function Chat() {
  return (
    <div>
      <MenuTop />
      <Link to="/recommendedLearningPath">
        <IoIosArrowBack className="arrowBack" />
      </Link>
      <DummyMessageList
        classNameSenderId="Sophie"
        className="firstChat"
        senderId="Sophie"
        messageText="Hi my name is Sophie, I would love to connect with other developers"
      />
      <DummyMessageList
        classNameSenderId="Anabelle"
        className="secondChat"
        senderId="Annabelle"
        messageText="Hey Sophie, my name is Annabelle! Nice to meet you"
      />
      <DummyMessageList
        classNameSenderId="Sophie"
        className="firstChat"
        senderId="Sophie"
        messageText="Nice to meet you too Annabelle, I hope you don't mind. I found your profile on Cindy's course"
      />
      <InputGroup className="mb-3 inputNewMessage">
        <FiCamera className="cameraIcon" />
        <FormControl
          placeholder="Type your message here"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <Button variant="outline-secondary">Send</Button>
        </InputGroup.Append>
      </InputGroup>
      <MenuBottom />
    </div>
  );
}
