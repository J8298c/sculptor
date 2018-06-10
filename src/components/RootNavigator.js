import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import AuthContainer from './Auth/AuthContainer';

const RootNavigator = () => (
  <Router>
    <Scene key="root">
      <Scene key="login" title='Login' component={AuthContainer} />
    </Scene>
  </Router>
)

export default RootNavigator;
