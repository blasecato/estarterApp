import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from '../scenes/Login/Login';

const RNApp = createStackNavigator(
  {
    login: {
      screen: Login,
      navigationOptions: { header: null }
    }
  },
  {
    initialRouteName: 'newsContacts'
  }
);

export default createAppContainer(RNApp);