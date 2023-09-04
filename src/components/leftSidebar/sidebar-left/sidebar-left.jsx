import React from 'react'
import './sidebar-left.scss'
import HeaderLeft from '../header-left/header-left.component'
import SearchContact from '../search-contact/search-contact'
import ChatContacts from '../chat-contacts/chat-contacts'

function LeftSidebar() {
  return (
    <div className='LeftSidebar'>
      <HeaderLeft/>
      <SearchContact/>
      <ChatContacts/>
    </div>
  )
}

export default LeftSidebar