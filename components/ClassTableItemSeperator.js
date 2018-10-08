import React from 'react';
import {View} from 'react-native';

export default class ClassTableItemSeperator extends React.Component {
  render() {
    return (
      <View style={{
        backgroundColor: 'black',
        height: 2,
        flex: 1,
        flexDirection: 'row'
      }}>
      </View>
    )
  }
}