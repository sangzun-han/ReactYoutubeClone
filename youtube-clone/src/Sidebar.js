import React from 'react';
import SidebarRow from './SidebarRow';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className='sidebar'>
      <SidebarRow Icon={HomeIcon} title='홈' />
      <SidebarRow Icon={WhatshotIcon} title='인기' />
      <SidebarRow Icon={SubscriptionIcon} title='구독' />
      <hr />
      <SidebarRow Icon={VideoLibraryIcon} title='보관함' />
      <SidebarRow Icon={HistoryIcon} title='시청기록' />
      <SidebarRow Icon={ExpandMoreOutlinedIcon} title='더보기' />
      <hr />
    </div>
  );
}

export default Sidebar;
