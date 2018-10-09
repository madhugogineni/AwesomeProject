import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation'; //React Navigation's StackNavigator provides a way for your app to transition between screens and manage navigation history
import Classes from './components/Classes';
const RootStack = StackNavigator(
  {
    Classes: {
      screen: Classes,
    },
  },
  {
    initialRouteName: 'Classes',
  }
);
export default class App extends React.Component {
  render() {
    return <RootStack />; 
  }
}