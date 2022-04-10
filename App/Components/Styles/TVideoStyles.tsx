import {StyleSheet} from 'react-native';
import Normalize from '../../Themes/Normalize';

const styles = StyleSheet.create({
  videoItem: {
    width: '100%',
    position: 'absolute',
  },
  container: {
    flex: 1,
  },
  bottom: {
    height: Normalize(100),
    width: '100%',
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: Normalize(10),
    flexDirection: 'row',
  },
  bottomLeft: {
    height: '100%',
    justifyContent: 'space-around',
    width: '80%',
  },
  bottomRight: {
    width: '20%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    height: '90%',
  },
  musicNoteIcon: {
    width: Normalize(15),
    height: Normalize(15),
    marginRight: Normalize(5),
  },
  wrapMusic: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '70%',
  },
  normalText: {
    color: 'white',
    fontSize: Normalize(16),
  },
  boldText: {
    fontWeight: 'bold',
  },
  discIcon: {
    width: Normalize(40),
    height: Normalize(40),
  },
  overflowAnimated: {
    overflow: 'hidden',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  wrapAnimationMusic: {
    overflow: 'hidden',
    width: '70%',
  },
  firstMusicName: {
    alignSelf: 'flex-start',
  },
  secondMusicName: {
    alignSelf: 'flex-start',
    position: 'absolute',
  },
  icon40: {
    width: Normalize(40),
    height: Normalize(40),
  },
  numberText: {
    color: 'white',
    fontSize: Normalize(13),
  },
  wrapDetailVideo: {
    position: 'absolute',
    bottom: Normalize(50),
    right: 0,
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  avatarStyle: {borderRadius: Normalize(20)},
  wrapPlus: {
    width: Normalize(40),
    height: Normalize(40),
    alignItems: 'center',
    marginBottom: Normalize(10),
  },
  plusIcon: {
    width: Normalize(20),
    height: Normalize(20),
  },
  wrapLikes: {
    alignItems: 'center',
  },
  plusButton: {position: 'absolute', bottom: Normalize(-10)},
});
export default styles;
