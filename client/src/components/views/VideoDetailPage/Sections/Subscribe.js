import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function Subscribe(props) {
  const [SubscribeNumber, setSubscribeNumber] = useState(0);
  const [Subscribed, setSubscribed] = useState(false);

  const onSubscribe = () => {
    let subscribedVariables = {
      userTo: props.userTo,
      userFrom: props.userFrom,
    };
    //구독중
    if (Subscribed) {
      Axios.post('/api/subscribe/unSubscribe', subscribedVariables).then(
        (response) => {
          if (response.data.success) {
            setSubscribeNumber(SubscribeNumber - 1);
            setSubscribed(!Subscribed);
          } else {
            alert('구독 취소 실패!');
          }
        }
      );
    } else {
      Axios.post('/api/subscribe/subscribe', subscribedVariables).then(
        (response) => {
          if (response.data.success) {
            setSubscribeNumber(SubscribeNumber + 1);
            setSubscribed(!Subscribed);
          } else {
            alert('구독 실패!');
          }
        }
      );
    }
  };

  let variable = { userTo: props.userTo };
  useEffect(() => {
    Axios.post('/api/subscribe/subscribeNumber', variable).then((response) => {
      if (response.data.success) {
        setSubscribeNumber(response.data.subscribeNumber);
      } else {
        alert('구독자 정보를 받아오지 못했습니다.');
      }
    });

    let subscribedVariable = {
      userTo: props,
      userFrom: localStorage.getItem('userId'),
    };

    Axios.post('/api/subscribe/subscribed', subscribedVariable).then(
      (response) => {
        if (response.data.success) {
          setSubscribed(response.data.unscribed);
        } else {
          alert('정보를 받아오지 못했습니다.');
        }
      }
    );
  }, []);

  return (
    <div>
      <button
        onClick={onSubscribe}
        style={{
          backgroundColor: `${Subscribed ? '#AAAAAA' : '#CC0000'}`,
          borderRadius: '4px',
          color: 'white',
          padding: '10px 16px',
          fontWeight: '500',
          fontSize: '1rem',
          textTransform: 'uppercase',
          border: 'none',
        }}
      >
        {SubscribeNumber} {Subscribed ? '구독중' : '구독하기'}
      </button>
    </div>
  );
}

export default Subscribe;
