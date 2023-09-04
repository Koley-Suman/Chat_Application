import React from 'react';
import './search-contact.scss';
import SearchIcon from '@mui/icons-material/Search';
import { Divider } from '@mui/material';

function SearchContact() {
  return (
    <div className='SearchContact'>
      <div className="inputbox">
        <div className="icon">
        <SearchIcon sx={{ fontSize: 20 }}/>
        </div>
        <input type="text" className='search' placeholder='Search or start new chat'/>
      </div>
    </div>
  )
}

export default SearchContact
