import React from 'react'
import "./homepage.scss"
import LeftSidebar from '../leftSidebar/sidebar-left/sidebar-left'
import SidebarRight from '../rightSidebar/sidebarRight/sidebar.right'

export default function Homepage() {
  return (
    <div className="homepage">
        <LeftSidebar/>
        <SidebarRight/>
    </div>
  )
}

