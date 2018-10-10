import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import EditClass from './EditClass';
class StudentListItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteButtonClick = this.handleDeleteButtonClick.bind(this);
    }
    handleDeleteButtonClick() {
        fetch("http://testbed2.riktamtech.com:3000/sdelete", {
            method: "POST",
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({ sid: this.props.data.sid })
        });
        this.props.navigation.navigate('Students', { cid: this.props.classdata.cid });
    }
    render() {
        console.log(this.props.data);
        return (
            <View style={styles.flatlist_item}>
                <Text style={styles.sid_text}>{this.props.data.sid}</Text>
                <Text style={styles.sname_text}>{this.props.data.sname}</Text>
                <Text style={styles.sage_text}>{this.props.data.age}</Text>
                <Text style={styles.sclass_text}>{this.props.data.class}</Text>
                <TouchableOpacity style={styles.edit_button_style} onPress={() => this.props.navigation.navigate('EditStudent', { data: this.props.data, classdata: this.props.classdata })}><Text>Edit</Text></TouchableOpacity>
                <TouchableOpacity style={styles.delete_button_style} onPress={this.handleDeleteButtonClick}><Text>Delete</Text></TouchableOpacity>
            </View >
        )
    }
}
export default withNavigation(StudentListItem);
const styles = StyleSheet.create({
    flatlist_item: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingTop: 5,
        paddingBottom: 5
    },
    sname_text: {
        width: 80,
        height: 30,
        fontSize: 15,
        textAlign: 'center',
        justifyContent: 'center'
    },
    sage_text: {
        width: 80,
        height: 30,
        fontSize: 15,
        textAlign: 'center',
        justifyContent: 'center'
    },
    sclass_text: {
        width: 80,
        height: 30,
        fontSize: 15,
        textAlign: 'center',
        justifyContent: 'center'
    },
    sid_text: {
        width: 80,
        height: 30,
        fontSize: 15,
        textAlign: 'center',
        justifyContent: 'center'
    },
    view_button_style: {
        width: 80,
        height: 30,
        backgroundColor: 'lightgrey',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 3,
        fontSize: 15,
        borderRadius: 5
    },
    delete_button_style: {
        width: 80,
        height: 30,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 3,
        fontSize: 15,
        borderRadius: 5
    },
    edit_button_style: {
        width: 80,
        height: 30,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 3,
        fontSize: 15,
        borderRadius: 5
    }
});