import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  videoItem: {
    width: '100%',
    position: 'absolute',
  },
  container: {
    flex: 1,
  },
  bottom: {
    height: 100,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  bottomLeft: {
    height: '100%',
    justifyContent: 'space-around',
    width: '80%',
  },
  bottomRight: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  musicNoteIcon: {
    width: 15,
    height: 15,
    marginRight: 5,
  },
  wrapMusic: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '70%',
  },
  normalText: {
    color: 'white',
    fontSize: 16,
  },
  boldText: {
    fontWeight: 'bold',
  },
  discIcon: {
    width: 40,
    height: 40,
  },
  overflowAnimated: {
    overflow: 'hidden',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
export default styles;
