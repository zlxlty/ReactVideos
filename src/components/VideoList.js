/*
 * @Author: Tianyi Lu
 * @Description: 
 * @Date: 2021-07-27 11:29:18
 * @LastEditors: Tianyi Lu
 * @LastEditTime: 2021-07-27 13:59:12
 */

import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map(video => {
    return <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect}/>
  })

  return (
    <div className="ui relaxed divided list">
      {renderedList}
    </div>
  );
}

export default VideoList;