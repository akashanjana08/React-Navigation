/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import HomeScreen from './screen/HomeScreen'
import Profile from './screen/Profile'
import {createStackNavigator, createAppContainer} from 'react-navigation';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <NavigationScreenContainer/>
    )
  }
}

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Profile :{screen:Profile}
});

const NavigationScreenContainer = createAppContainer(MainNavigator);
