import React from "react"

interface DummyMessageListProps {
    senderId: string;
    messageText: string;
}

const DummyMessageList: React.FC<DummyMessageListProps> = ({
    senderId,
    messageText,
}) => {
    return (
        <div>
            <p>{senderId}</p>
            <p>{messageText}</p>
        </div>
    );
};


export default DummyMessageList;
