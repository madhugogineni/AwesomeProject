import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, NavigationActions } from 'react-native';

class AddClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cname: ""
        }
        this.handleAddStudentButtonClick = this.handleAddStudentButtonClick.bind(this);
    }
    handleAddStudentButtonClick() {
        fetch("http://testbed2.riktamtech.com:3000/add", {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({ "cname": this.state.cname })
        });
        this.props.navigation.navigate('Classes',{datachanged: "true"});
    }
    render() {
        return (
            <View style={styles.mainview}>
                <Text style={styles.inputlabel}>Cid</Text>
                <TextInput style={styles.textinput} placeholder="Enter the class name here" onChangeText={(text) => this.setState({ cname: text })}></TextInput>
                <TouchableOpacity style={styles.submitbutton} onPress={this.handleAddStudentButtonClick}>
                    <Text style={{
                        color: 'white'
                    }}>Add Class</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export default AddClass

const styles = StyleSheet.create({
    mainview: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        paddingRight: 25,
        paddingLeft: 25,
        marginTop: 30
    },
    inputlabel: {
        fontSize: 15,
        marginBottom: 20,
        color: 'black'
    },
    textinput: {
        marginBottom: 20,
        padding: 10,
        borderWidth: 2,
        backgroundColor: 'white'
    },
    submitbutton: {
        width: 100,
        height: 40,
        backgroundColor: 'steelblue',
        alignItems: 'center',
        justifyContent: 'center'
    }
});