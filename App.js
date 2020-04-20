import 'react-native-gesture-handler';
import Navigator from './src/navigation/stack';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import Splash from './src/scenes/Splash/Splash';
import React, { useState, useEffect } from 'react';


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('./assets/Ubuntu-Regular.ttf'),
      Roboto_medium: require('./assets/Ubuntu-Medium.ttf'),
      Ubuntu: require('./assets/Ubuntu-Regular.ttf'),
      Ubuntu_medium: require('./assets/Ubuntu-Medium.ttf'),
      ...Ionicons.font,
    });
    setTimeout(() => {
      this.setState({ isReady: true });
    }, 1500);
  }

  render() {
    if (!this.state.isReady) {
      return <Splash />;
    }

    return (
      <Navigator />
    );
  }
}