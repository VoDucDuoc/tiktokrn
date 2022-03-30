import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './Containers/HomeScreen';
import {Image} from 'react-native';
import {Images} from './Themes/Images';
import styles from './Styles/AppStyles';
// import styles from './Styles/AppStyles';

const BottomTab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={{
          tabBarStyle: {backgroundColor: 'black'},
          tabBarActiveTintColor: 'white',
          headerShown: false,
        }}>
        <BottomTab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={Images.home}
                style={[
                  styles.bottomTabIcon,
                  focused && styles.bottomTabIconFocused,
                ]}
              />
            ),
          }}
        />
        <BottomTab.Screen
          name="Discover"
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={Images.search}
                style={[
                  styles.bottomTabIcon,
                  focused && styles.bottomTabIconFocused,
                ]}
              />
            ),
          }}
        />
        <BottomTab.Screen
          name="NewVideo"
          component={HomeScreen}
          options={{
            tabBarLabel: () => null,
            tabBarIcon: ({focused}) => (
              <Image
                source={Images.newVideo}
                style={[
                  styles.newVideoButton,
                  focused && styles.bottomTabIconFocused,
                ]}
              />
            ),
          }}
        />
        <BottomTab.Screen
          name="Inbox"
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={Images.message}
                style={[
                  styles.bottomTabIcon,
                  focused && styles.bottomTabIconFocused,
                ]}
              />
            ),
          }}
        />
        <BottomTab.Screen
          name="Profile"
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={Images.user}
                style={[
                  styles.bottomTabIcon,
                  focused && styles.bottomTabIconFocused,
                ]}
              />
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default App;
