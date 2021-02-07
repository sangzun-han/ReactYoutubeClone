import React from 'react';
import ChannelRow from './ChannelRow';
import TuneOutLinedIcon from '@material-ui/icons/TuneOutlined';
import VideoRow from './VideoRow';
import './SearchPage.css';

function SearchPage() {
  return (
    <div className='searchPage'>
      <div className='searchPage__filter'>
        <TuneOutLinedIcon />
        <h2>필터</h2>
      </div>
      <hr />
      <ChannelRow
        image='https://user-images.githubusercontent.com/57563053/107131413-51a81180-6919-11eb-9a0a-c96c8fcebb45.jpg'
        channel='팡이요'
        verified
        subs='41.8'
        noOfVideos={3770}
        description='안녕하세요 팡이요입니다. 아프리카TV에서 메이플스토리를 메인컨텐츠로 생방송을 하고 있습니다.'
      />
      <hr />

      <VideoRow
        views='22만'
        title='쿨감뚝이 더 쎈거... 맞아?[팡이요, 메이플스토리]'
        description='풀버전은 아프리카TV 팡이요 방송국 VOD에 자동 업로드가 됩니다.
        방송국에서 확인 해 주시기 바랍니다.^^'
        timestamp='1일전'
        image='https://user-images.githubusercontent.com/57563053/107132354-84560800-6921-11eb-8790-a7c52623ea42.gif'
        channel
      />
      <VideoRow
        views='25만'
        title='아이템 터지는걸 즐기는 사람 feat.잇몸만개미션 [팡이요, 메이플스토리]'
        description='풀버전은 아프리카TV 팡이요 방송국 VOD에 자동 업로드가 됩니다.
        방송국에서 확인 해 주시기 바랍니다.^^'
        timestamp='2일전'
        image='https://user-images.githubusercontent.com/57563053/107132355-84ee9e80-6921-11eb-9b44-7445a2909a41.gif'
        channel
      />
    </div>
  );
}

export default SearchPage;
