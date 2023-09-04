import React from 'react'
import './chat-contacts.scss'
import UserContact from './user-contact/user-contact'

function ChatContacts() {
  return (
    <div className='ChatContacts'>
      <UserContact/>
      <UserContact/>
      <UserContact/>
      <UserContact/>
    </div>
  )
}

export default ChatContacts
