import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import EditClass from './EditClass';
class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.deleteClass = this.deleteClass.bind(this);
    }
    deleteClass(cid) {
        fetch("http://testbed2.riktamtech.com:3000/delete", {
            method: "POST",
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({ cid: this.props.data.cid })
        });
        this.props.navigation.navigate('Classes',{});
    }
    render() {
        console.log(this.props.data);
        return (
            <View style={styles.flatlist_item}>
                <Text style={styles.cid_text}>{this.props.data.cid}</Text>
                <Text style={styles.cname_text}>{this.props.data.cname}</Text>
                <TouchableOpacity style={styles.view_button_style} onPress={() => this.props.navigation.navigate('Students', {data: this.props.data})}><Text>View</Text></TouchableOpacity>
            <TouchableOpacity style={styles.edit_button_style} onPress={() => this.props.navigation.navigate('EditClass', { data: this.props.data })}><Text>Edit</Text></TouchableOpacity>
            <TouchableOpacity style={styles.delete_button_style} onPress={this.deleteClass}><Text>Delete</Text></TouchableOpacity>
            </View >
        )
    }
}
export default withNavigation(ListItem);
const styles = StyleSheet.create({
    flatlist_item: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingTop: 5,
        paddingBottom: 5
    },
    cname_text: {
        width: 80,
        height: 30,
        fontSize: 15,
        textAlign: 'center'
    },
    cid_text: {
        width: 80,
        height: 30,
        fontSize: 15,
        textAlign: 'center'
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