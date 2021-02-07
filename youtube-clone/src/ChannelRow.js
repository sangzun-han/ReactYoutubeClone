import React from 'react';
import './ChannelRow.css';
import { Avatar } from '@material-ui/core';
import VerifiedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';

function ChannelRow({
  image,
  channel,
  subs,
  noOfVideos,
  description,
  verified,
}) {
  return (
    <div className='channelRow'>
      <Avatar className='channelRow__logo' alt={channel} src={image} />
      <div className='channelRow__text'>
        <h4>
          {channel} {verified && <VerifiedIcon />}
        </h4>
        <p>
          구독자 {subs}만명 • 동영상 {noOfVideos}개
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ChannelRow;
