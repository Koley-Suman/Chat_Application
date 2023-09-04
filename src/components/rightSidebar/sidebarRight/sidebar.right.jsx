import React from 'react'
import './sidebar.right.scss'
import HeaderRight from '../header-right/header-right'
import ChatBody from '../chat-body/chat-body'
import FooterRight from '../footer-right/footer-right'

function SidebarRight() {
  return (
    <div className='SidebarRight'>
      <HeaderRight/>
      <ChatBody/>
      <FooterRight/>
    </div>
  )
}

export default SidebarRight