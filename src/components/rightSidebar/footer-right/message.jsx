import React from "react";
import SendIcon from "@mui/icons-material/Send";
import { IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import './message.scss';

function Message() {
  return (
    <div className="message">
      <div className="icons">
        <SentimentVerySatisfiedIcon/>
        <AddIcon/>
      </div>
      <input type="text" placeholder="Type a message"/>
      <div className="send">
        <SendIcon sx={{ fontSize: 30 }}/>
      </div>
    </div>
  );
}

export default Message;
