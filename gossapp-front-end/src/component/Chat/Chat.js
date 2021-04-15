import { Avatar, IconButton } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { SearchOutlined, AttachFile } from "@material-ui/icons";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import "./Chat.scss";

function Chat() {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat__headerInfo">
          <h2>Room Name</h2>
          <p>Last seen at...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <div className={`chat__message ${true && "chat__reciever"}`}>
          <span className="chat__name">Utsah</span>
          Hey there...
          <span className="chat__timestamp">3:00 AM</span>
        </div>
      </div>
      <div className="chat__footer"></div>
    </div>
  );
}

export default Chat;