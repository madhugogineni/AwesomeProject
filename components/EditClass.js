import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
export default class EditClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cid: this.props.navigation.state.params.data.cid,
            cname: this.props.navigation.state.params.data.cname
        }
        this.handleSaveButtonClick = this.handleSaveButtonClick.bind(this);
    }
    handleSaveButtonClick() {
        fetch("http://testbed2.riktamtech.com:3000/update", {
            method: "POST",
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({ "cid": this.state.cid, "cname": this.state.cname })
        });
        this.props.navigation.navigate('Classes');
    }
    render() {
        return (
            <View style={styles.editclass_mainview}>
                <Text style={styles.editclass_heading}>Edit Class</Text>
                <TextInput style={styles.TextInput} editable={false}>{this.props.navigation.state.params.data.cid}</TextInput>
                <TextInput style={styles.TextInput} onChangeText={(value) => this.setState({ cname: value })}>{this.props.navigation.state.params.data.cname}</TextInput>
                <TouchableOpacity style={styles.editclass_savebutton} onPress={this.handleSaveButtonClick}>
                    <Text style={{
                        color: 'white'
                    }}>Save Class</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    editclass_mainview: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginTop: 20,
        paddingLeft: 25,
        paddingRight: 25
    },
    editclass_heading: {
        fontSize: 15,
        color: 'black',
    },
    editclass_savebutton: {
        width: 80,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'steelblue',
        marginTop: 20
    },
    TextInput: {
        backgroundColor: 'white',
        marginTop: 20,
        borderWidth: 2,
        padding: 10
    }
})