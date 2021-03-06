import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import DummyMessageList from "./DummyMessageList.tsx";

export function Chat() {
  return (
    <div>
      <DummyMessageList
        senderId="Sophie"
        messageText="Hi my name is Sophie, I would love to connect with other developers"
      />
      <DummyMessageList
        senderId="Annabelle"
        messageText="Hey Sophie, my name is Annabelle! Nice to meet you"
      />
      <DummyMessageList
        senderId="Sophie"
        messageText="Nice to meet you too Annabelle, I hope you don't mind. I found your profile on Cindy's course"
      />
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Type your message here"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <Button variant="outline-secondary">Send</Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
}
