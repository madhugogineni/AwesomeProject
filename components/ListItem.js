import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
export default class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteButtonClick = this.handleDeleteButtonClick.bind(this);
    }
    handleDeleteButtonClick() {
        this.props.deleteAction(this.props.data.cid);
    }

    render() {
        return (
            <View style={styles.flatlist_item}>
                <Text style={styles.cid_text}>{this.props.data.cid}</Text>
                <Text style={styles.cname_text}>{this.props.data.cname}</Text>
                <TouchableOpacity style={styles.view_button_style}><Text>View</Text></TouchableOpacity>
                <TouchableOpacity style={styles.edit_button_style}><Text>Edit</Text></TouchableOpacity>
                <TouchableOpacity style={styles.delete_button_style} onPress={this.handleDeleteButtonClick}><Text>Delete</Text></TouchableOpacity>
            </View>
        )
    }
}

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
        marginLeft: 3,
        fontSize: 15
    },
    delete_button_style: {
        width: 80,
        height: 30,
        backgroundColor: 'red',
        alignItems: 'center',
        marginLeft: 3,
        fontSize: 15
    },
    edit_button_style: {
        width: 80,
        height: 30,
        backgroundColor: 'yellow',
        alignItems: 'center',
        marginLeft: 3,
        fontSize: 15
    }
});