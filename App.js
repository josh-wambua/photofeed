import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import feed from './app/screens/feed';
import profile from './app/screens/profile';
import upload from './app/screens/upload';
import {f, auth, database} from './config/config';

const MainStack = createAppContainer(createBottomTabNavigator(
  {
    Feed: { screen: feed },
    Upload: { screen: upload },
    Profile: { screen: profile }
  }
));

export default class App extends React.Component {
  login = async() => {
    //force a log in for testing purposes
    try {
      let user = await  auth.signInWithEmailAndPassword('jay@email.com', '123456');
    } catch(error) {
      console.log(error);
    }
  }
  
  constructor(props) {
    super(props);
    this.login();
  }

  render() {
     return (<MainStack />);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
