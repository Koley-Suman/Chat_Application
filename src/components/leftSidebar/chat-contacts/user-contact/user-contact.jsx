import React from "react";
import "./user-contact.scss";
import {
  Avatar,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";

function UserContact() {
  return (
    <div className="contact">
      <ListItem button>
        <ListItemAvatar>
          <Avatar src="/broken-image.jpg" />
        </ListItemAvatar>
        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
      </ListItem>
      <Divider variant="inset" component="li" />
    </div>
  );
}

export default UserContact;
