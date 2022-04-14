import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import React, {useState} from 'react';
import {FlatList, StatusBar} from 'react-native';
import {TVideo} from '../Components';
import {WINDOW_HEIGHT} from '../Components/TVideo';
import Data from '../Data';
import {VideoData} from '../Type';

function HomeScreen() {
  const [isActiveVideo, setIsActiveVideo] = useState<number>(0);

  const bottomTabHeight = useBottomTabBarHeight();
  const videoHeight =
    WINDOW_HEIGHT - bottomTabHeight - (StatusBar.currentHeight || 0);

  const renderVideo = ({item, index}: {item: VideoData; index: number}) => (
    <TVideo
      key={'videoKey' + index}
      data={item}
      isActive={isActiveVideo === index}
    />
  );

  const onScrollVideo = (event: any) => {
    const index = Math.round(event.nativeEvent.contentOffset.y / videoHeight);
    setIsActiveVideo(index);
  };
  return (
    <FlatList
      onScroll={onScrollVideo}
      data={Data}
      extraData={Data}
      pagingEnabled
      renderItem={renderVideo}
    />
  );
}

export default HomeScreen;
