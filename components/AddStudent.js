import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default class AddStudent extends React.Component {
    static navigationOptions = {
        title: 'Add Student'
    };
    constructor(props) {
        super(props);
        this.state = {
            sname: "",
            sage: ""
        }
        this.handleAddStudentButtonClick = this.handleAddStudentButtonClick.bind(this);
    }
    handleAddStudentButtonClick() {
        console.log(this.state.sname);
        console.log(this.state.sage);
        fetch("http://testbed2.riktamtech.com:3000/sadd", {
            method: "POST",
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({ sname: this.state.sname, age: this.state.sage, cid: this.props.navigation.state.params.data.cid })
        });
        this.props.navigation.navigate('Students', { cid: this.props.navigation.state.params.data.cid });
    }
    render() {
        return (
            <View style={styles.addstudent_mainview}>
                <Text style={styles.addstudent_inputlabel}>StudentName</Text>
                <TextInput style={styles.addstudent_textinput} placeholder="Enter the student name here" onChangeText={(text) => this.setState({ sname: text })}></TextInput>
                <Text style={styles.addstudent_inputlabel}>StudentAge</Text>
                <TextInput style={styles.addstudent_textinput} keyboardType="numeric" placeholder="Enter the student age here" onChangeText={(text) => this.setState({ sage: text })}></TextInput>
                <Text style={styles.addstudent_inputlabel}>Student Class</Text>
                <TextInput style={styles.addstudent_textinput} value={this.props.navigation.state.params.data.cname} editable={false}></TextInput>
                <TouchableOpacity style={styles.addstudent_submitbutton} onPress={this.handleAddStudentButtonClick}>
                    <Text style={{
                        color: 'white'
                    }}>Add Stud</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    addstudent_mainview: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        paddingRight: 25,
        paddingLeft: 25,
        marginTop: 30
    },
    addstudent_inputlabel: {
        fontSize: 15,
        marginBottom: 20,
        color: 'black'
    },
    addstudent_textinput: {
        marginBottom: 20,
        padding: 10,
        borderWidth: 2,
        backgroundColor: 'white'
    },
    addstudent_submitbutton: {
        width: 100,
        height: 40,
        backgroundColor: 'steelblue',
        alignItems: 'center',
        justifyContent: 'center'
    }
});