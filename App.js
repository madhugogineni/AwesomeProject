import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button, Alert, ScrollView, FlatList, SectionList, ActivityIndicator, TouchableOpacity } from 'react-native';
import ListItem from './components/ListItem';
import { ClassTableItemSeperator } from './components/ClassTableItemSeperator';
import ListHeader from './components/ListHeader';
import AddStudentModal from './components/AddStudentModal';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});



type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      data: [],
      isAddStudentModalOpened: false,
    };
    this.handleAddClassButtonClick = this.handleAddClassButtonClick.bind(this);
    this.deleteClass = this.deleteClass.bind(this);
  }
  componentWillMount() {
    this.fetchData();
  }
  deleteClass(cid) {
    fetch("http://testbed2.ritkamtech.com:3000/delete", {
      method: "POST",
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({ "cid": cid })
    });
    this.fetchData();
  }
  fetchData() {
    fetch("http://testbed2.riktamtech.com:3000/home")
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ data: responseJson.data });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  handleAddClassButtonClick() {
    console.log("new class button is clicked");
  }
  render() {
    console.log(this.state.data);
    return (
      <View style={styles.mainview}>
        <TouchableOpacity style={styles.addbutton} onPress={() => this.handleAddClassButtonClick()}>
          <Text style={{ color: 'white' }}>Add Class</Text>
        </TouchableOpacity>
        <ScrollView style={styles.scrollview} horizontal={true}>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => <ListItem data={item} deleteAction={this.deleteClass} />}
            ListHeaderComponent={<ListHeader />}
            ItemSeparatorComponent={ClassTableItemSeperator}
            keyExtractor={(item) => item.cid + ""} />
        </ScrollView>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 150
  },
  addbutton: {
    width: 200,
    height: 40,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: "center",
    backgroundColor: 'steelblue',
  },
  scrollview: {
    marginTop: 70,
    marginLeft: 10,
    marginRight: 10
  },
});
