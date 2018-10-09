import React from 'react';
import { StackNavigator } from 'react-navigation';
import Classes from './components/Classes';
import AddClass from './components/AddClass';
import EditClass from './components/EditClass';
const RootStack = StackNavigator(
  {
    Classes: {
      screen: Classes,
    },
    AddClass: {
      screen: AddClass,
    },
    EditClass: {
      screen: EditClass
    }
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