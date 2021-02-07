import React, { useState } from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppIcon from '@material-ui/icons/Apps';
import NotificationIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

function Header() {
  const [inputSearch, setInputSearch] = useState('');

  const onChange = (e) => {
    setInputSearch(e.target.value);
  };
  return (
    <header className='header'>
      <div className='header__left'>
        <MenuIcon />
        <Link to='/'>
          <img
            className='header__logo'
            src='https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg'
            alt='youtube-logo'
          />
        </Link>
      </div>

      <div className='header__input'>
        <input
          onChange={onChange}
          value={inputSearch}
          placeholder='검색'
          type='text'
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className='header__inputButton' />
        </Link>
      </div>

      <div className='header__icons'>
        <VideoCallIcon className='header__icon' />
        <AppIcon className='header__icon' />
        <NotificationIcon className='header__icon' />
        <Avatar alt='avatar' src='' />
      </div>
    </header>
  );
}

export default Header;
