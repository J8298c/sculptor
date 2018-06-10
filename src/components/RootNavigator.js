import React from 'react';
import {Scene, Router} from 'react-native-router-flux';

const RootNavigator = () => (
  <Router>
    <Scene key="root">
      <Scene key="login" title='Login' />
    </Scene>
  </Router>
)

export default RootNavigator;
