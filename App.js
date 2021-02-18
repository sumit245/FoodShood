import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';
import HomePage from './src/scenes/HomePage';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene
            key="home"
            component={HomePage}
            initial={true}
            hideNavBar={true}></Scene>
        </Scene>
      </Router>
    );
  }
}
