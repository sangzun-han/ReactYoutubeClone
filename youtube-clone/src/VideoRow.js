import React from 'react';
import './VideoRow.css';

function VideoRow({ views, description, timestamp, title, image }) {
  return (
    <div className='videoRow'>
      <img src={image} alt='video' />
      <div className='videoRow__text'>
        <h3>{title}</h3>
        <p className='videoRow__headline'>
          조회수 {views}회 {timestamp}
        </p>
        <p className='videoRow__description'>{description}</p>
      </div>
    </div>
  );
}

export default VideoRow;
