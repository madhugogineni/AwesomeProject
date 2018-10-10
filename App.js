import React from 'react';
import { StackNavigator } from 'react-navigation';
import Classes from './components/Classes';
import AddClass from './components/AddClass';
import EditClass from './components/EditClass';
import Students from './components/Students';
import AddStudent from './components/AddStudent';
import EditStudent from './components/EditStudent';
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
    },
    Students: {
      screen: Students
    },
    AddStudent: {
      screen: AddStudent
    },
    EditStudent: {
      screen: EditStudent
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