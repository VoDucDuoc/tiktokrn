import React, {useEffect, useRef} from 'react';
import {
  Animated,
  Dimensions,
  Easing,
  Image,
  StatusBar,
  Text,
  View,
} from 'react-native';
import {VideoData} from '../Type';
import Video from 'react-native-video';
import styles from './Styles/TVideoStyles';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {Images} from '../Themes/Images';

interface TVideoProps {
  data: VideoData;
}

const WINDOW_HEIGHT = Dimensions.get('window').height;

function TVideo({data}: TVideoProps) {
  const {avatarUri, caption, channelName, comments, likes, musicName, uri} =
    data;
  const bottomTabHeight = useBottomTabBarHeight();
  const videoHeight =
    WINDOW_HEIGHT - bottomTabHeight - (StatusBar.currentHeight || 0);

  const discAnimatedValue = useRef(new Animated.Value(0)).current;
  const musicNameAnimatedValue = useRef(new Animated.Value(0)).current;
  const discAnimation = {
    transform: [
      {
        rotate: discAnimatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '360deg'],
        }),
      },
    ],
  };
  const musicNameAnimation = {
    transform: [
      {
        translateX: musicNameAnimatedValue.interpolate({
          inputRange: [0, 0.5, 1],
          outputRange: [0, -100, 100],
        }),
      },
    ],
  };
  useEffect(() => {
    Animated.loop(
      Animated.timing(discAnimatedValue, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
    ).start();
    Animated.loop(
      Animated.timing(musicNameAnimatedValue, {
        toValue: 1,
        duration: 5000,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
    ).start();
  }, [discAnimatedValue, musicNameAnimatedValue]);

  return (
    <View style={styles.container}>
      <Video
        source={{uri}}
        style={[
          styles.videoItem,
          {
            height: videoHeight,
          },
        ]}
        resizeMode="cover"
        muted
      />
      <View style={styles.bottom}>
        <View style={styles.bottomLeft}>
          <Text style={styles.normalText}>
            @<Text style={styles.boldText}>{channelName}</Text>
          </Text>
          <Text style={styles.normalText} numberOfLines={2}>
            {caption}
          </Text>
          <View style={styles.wrapMusic}>
            <Image style={styles.musicNoteIcon} source={Images.musicNoteV2} />
            <View style={styles.overflowAnimated}>
              <Animated.Text style={[styles.normalText, musicNameAnimation]}>
                {musicName}
              </Animated.Text>
              <Animated.Text style={[styles.normalText, musicNameAnimation]}>
                {musicName}
              </Animated.Text>
            </View>
          </View>
        </View>
        <View style={styles.bottomRight}>
          <Animated.Image
            style={[styles.discIcon, discAnimation]}
            source={Images.disc}
          />
        </View>
      </View>
    </View>
  );
}

export default TVideo;
