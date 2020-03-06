import 'react-native-gesture-handler';
import Navigator from './src/navigation';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { AppLoading } from 'expo';
import React, { useState, useEffect } from 'react';


/* const App = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(async () => {
    // Actualiza el título del documento usando la API del navegador
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    setIsReady(true);
  });

  return (
    isReady ? <AppLoading /> : <Navigator />
  )

}

export default App; */
export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Navigator />
    );
  }
}