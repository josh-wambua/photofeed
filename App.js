import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import feed from './app/screens/feed';
import profile from './app/screens/profile';
import upload from './app/screens/upload';

const MainStack = createAppContainer(createBottomTabNavigator(
  {
    Feed: { screen: feed },
    Upload: { screen: upload },
    Profile: { screen: profile }
  }
));

export default function App() {
  return (
    <MainStack />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
