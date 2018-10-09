import React from 'react';
import { StackNavigator } from 'react-navigation'; 
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