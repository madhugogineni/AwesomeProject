import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
export default class EditClass extends React.Component {
    static navigationOptions = {
        title: 'Edit Student'
    };
    constructor(props) {
        super(props);
        this.state = {
            cid: this.props.navigation.state.params.classdata.cid,
            cname: this.props.navigation.state.params.classdata.cname,
            newsname: this.props.navigation.state.params.data.sname,
            newage: this.props.navigation.state.params.data.age
        }
        this.handleSaveButtonClick = this.handleSaveButtonClick.bind(this);
    }
    handleSaveButtonClick() {
        fetch("http://testbed2.riktamtech.com:3000/supdate", {
            method: "POST",
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({ sname: this.state.newsname, age: this.state.newage,sid: this.props.navigation.state.params.data.sid })
        });
        this.props.navigation.navigate('Students',{cid: this.props.navigation.state.params.classdata.cid});
    }
    render() {
        return (
            <View style={styles.editstudent_mainview}>
                <Text style={styles.editstudent_heading}>Edit Student</Text>
                <TextInput style={styles.TextInput} editable={false}>{this.props.navigation.state.params.data.sid}</TextInput>
                <Text style={styles.editstudent_heading}>Sname</Text>
                <TextInput style={styles.TextInput} onChangeText={(value) => this.setState({ newsname: value })}>{this.props.navigation.state.params.data.sname}</TextInput>
                <Text style={styles.editstudent_heading}>Sage</Text>
                <TextInput style={styles.TextInput} onChangeText={(value) => this.setState({ newsage: value })} keyboardType="numeric">{this.props.navigation.state.params.data.age}</TextInput>
                <TextInput style={styles.TextInput} editable={false}>{this.props.navigation.state.params.classdata.cname}</TextInput>
                <TouchableOpacity style={styles.editstudent_savebutton} onPress={this.handleSaveButtonClick}>
                    <Text style={{
                        color: 'white'
                    }}>Save Class</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    editstudent_mainview: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginTop: 20,
        paddingLeft: 25,
        paddingRight: 25
    },
    editstudent_heading: {
        fontSize: 15,
        color: 'black',
        marginTop:20
    },
    editstudent_savebutton: {
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