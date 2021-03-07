import React from "react";

interface DummyMessageListProps {
  senderId: string;
  messageText: string;
  className: string;
  classNameSenderId: string;
}

const DummyMessageList: React.FC<DummyMessageListProps> = ({
  senderId,
  messageText,
  className,
  classNameSenderId,
}) => {
  return (
    <div className="MessagePadding">
    <div className={className}>
      <p className={classNameSenderId}>{senderId}</p>
      <p>{messageText}</p>
    </div>
    </div>
  );
};

export default DummyMessageList;
