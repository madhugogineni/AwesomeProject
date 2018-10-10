import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import StudentListItem from './StudentListItem';
import { ClassTableItemSeperator } from './ClassTableItemSeperator';
import StudentListHeader from './StudentListHeader';
export default class Students extends React.Component {
    static navigationOptions = {
        title: 'Students'
    };
    constructor(props) {
        super(props);
        this.state = {
            cid: this.props.navigation.state.params.data.cid,
            cname:  this.props.navigation.state.params.data.cname,
            students: []
        }
    }
    componentWillMount() {
        this.fetchStudents();
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.navigation != this.props.navigation) {
            this.fetchStudents();
        }
    }
    fetchStudents() {
        fetch("http://testbed2.riktamtech.com:3000/shome", {
            method: "POST",
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({ cid: this.state.cid })
        }).then(Response => Response.json())
            .then((responseJson) => {
                this.setState({ data: responseJson.data });
            })
            .catch((error) => {
                console.error(error);
            });

    }
    render() {
        console.log(this.state.students);
        return (
            <View style={styles.students_mainview}>
                <TouchableOpacity style={styles.students_addbutton} onPress={() => this.props.navigation.navigate('AddStudent', { data: this.props.navigation.state.params.data})}>
                    <Text style={{ color: 'white' }}>Add Student</Text>
                </TouchableOpacity>
                <ScrollView style={styles.students_scrollview} horizontal={true}>
                    <FlatList
                        data={this.state.data}
                        renderItem={({ item }) => <StudentListItem data={item} classdata={this.props.navigation.state.params.data}/>}
                        ListHeaderComponent={<StudentListHeader />}
                        ItemSeparatorComponent={ClassTableItemSeperator}
                        keyExtractor={(item) => item.sid + ""} />
                </ScrollView>
            </View >
        );
    }
}
const styles = StyleSheet.create({
    students_mainview: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 100
    },
    students_addbutton: {
        width: 200,
        height: 40,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'steelblue',
    },
    students_scrollview: {
        marginTop: 70,
        marginLeft: 10,
        marginRight: 10
    },
});
