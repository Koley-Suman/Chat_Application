import React from 'react'
import './header-left.scss'
import { Avatar } from '@mui/material'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function HeaderLeft() {
  return (
    <div className='HeaderLeft'>
      <div className="profile">
      <Avatar src="/broken-image.jpg" />
      </div>
      <div className="settings">
        <DonutLargeIcon/>
        <ChatIcon/>
        <MoreVertIcon/>
      </div>
    </div>
  )
}

export default HeaderLeft
