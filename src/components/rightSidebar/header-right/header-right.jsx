import React from "react";
import "./header-right.scss";
import { Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function HeaderRight() {
  return (
    <div className="headerRight">
      <div className="avater">
        <Avatar alt="Travis Howard" src="avater.png" />
      </div>
      <div className="name">
        <p>Suman Koley</p>
      </div>
      <div className="chatSearch">
        <SearchIcon />
        <MoreVertIcon />
      </div>
    </div>
  );
}

export default HeaderRight;
