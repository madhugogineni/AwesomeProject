import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import ListItem from './ListItem';
import { ClassTableItemSeperator } from './ClassTableItemSeperator';
import ListHeader from './ListHeader';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

    static navigationOptions = {
        title: 'Classes'
    };
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            data: [],
        };
        this.handleAddClassButtonClick = this.handleAddClassButtonClick.bind(this);
    }
    componentWillMount() {
        this.fetchData();
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.navigation != this.props.navigation) {
            this.fetchData();
        }
    }


    fetchData() {
        console.log("fetchdata ");
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
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.mainview}>
                <TouchableOpacity style={styles.addbutton} onPress={() => this.props.navigation.navigate('AddClass')}>
                    <Text style={{ color: 'white' }}>Add Class</Text>
                </TouchableOpacity>
                <ScrollView style={styles.scrollview} horizontal={true}>
                    <FlatList
                        data={this.state.data}
                        renderItem={({ item }) => <ListItem data={item} />}
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
        marginTop: 100
    },
    addbutton: {
        width: 200,
        height: 40,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'steelblue',
    },
    scrollview: {
        marginTop: 70,
        marginLeft: 10,
        marginRight: 10
    },
});

