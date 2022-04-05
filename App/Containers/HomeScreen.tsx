import React from 'react';
import {Text} from 'react-native';
import {TVideo} from '../Components';
import Data from '../Data';
import styles from './Styles/HomeScreenStyles';
function HomeScreen() {
  return <TVideo data={Data[0]} />;
}

export default HomeScreen;
