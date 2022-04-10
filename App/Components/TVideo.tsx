import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  Easing,
  Image,
  ImageBackground,
  LayoutChangeEvent,
  StatusBar,
  Text,
  TouchableOpacity,
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
  const firstMusicNameAnimatedValue = useRef(new Animated.Value(0)).current;
  const secondMusicNameAnimatedValue = useRef(new Animated.Value(0)).current;

  const [widthMusicNameView, setWidthMusicNameView] = useState(0);
  const [widthMusicNameText, setWidthMusicNameText] = useState(0);

  const onLayoutMusicNameView = (event: LayoutChangeEvent) => {
    const {width} = event.nativeEvent.layout;
    setWidthMusicNameView(width);
  };

  const onLayoutMusicNameText = (event: LayoutChangeEvent) => {
    const {width} = event.nativeEvent.layout;
    setWidthMusicNameText(width);
  };

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

  const firstMusicNameAnimation = {
    transform: [
      {
        translateX: firstMusicNameAnimatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [widthMusicNameView, -widthMusicNameText],
        }),
      },
    ],
  };

  const secondMusicNameAnimation = {
    transform: [
      {
        translateX: secondMusicNameAnimatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [widthMusicNameView, -widthMusicNameText],
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
      Animated.timing(firstMusicNameAnimatedValue, {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
    ).start();
    const timeout = setTimeout(() => {
      Animated.loop(
        Animated.timing(secondMusicNameAnimatedValue, {
          toValue: 1,
          duration: 4000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
      ).start();
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

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
        repeat
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
            <View
              onLayout={onLayoutMusicNameView}
              style={styles.wrapAnimationMusic}>
              <Animated.Text
                onLayout={onLayoutMusicNameText}
                style={[
                  styles.normalText,
                  firstMusicNameAnimation,
                  styles.firstMusicName,
                ]}>
                {musicName}
              </Animated.Text>
              <Animated.Text
                style={[
                  styles.normalText,
                  secondMusicNameAnimation,
                  styles.secondMusicName,
                ]}>
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
          <View
            style={[
              styles.wrapDetailVideo,
              {
                height: WINDOW_HEIGHT / 3,
              },
            ]}>
            <ImageBackground
              source={{uri: avatarUri}}
              imageStyle={styles.avatarStyle}
              style={styles.wrapPlus}>
              <TouchableOpacity style={styles.plusButton}>
                <Image source={Images.plusButton} style={styles.plusIcon} />
              </TouchableOpacity>
            </ImageBackground>
            <View style={styles.wrapLikes}>
              <Image source={Images.heart} style={styles.icon40} />
              <Text style={styles.numberText}>{likes}</Text>
            </View>
            <View style={styles.wrapLikes}>
              <Image source={Images.messageCircle} style={styles.icon40} />
              <Text style={styles.numberText}>{comments}</Text>
            </View>
            <View style={styles.wrapLikes}>
              <Image source={Images.reply} style={styles.icon40} />
              <Text style={styles.numberText}>{comments}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default TVideo;
