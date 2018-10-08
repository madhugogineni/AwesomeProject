import React from 'react';
import { Text, View,StyleSheet } from 'react-native';

export default class ListHeader extends React.Component {
    render() {
        return (
            <View style={styles.listheader}>
                <Text style={styles.headingtext}>Cid</Text>
                <Text style={styles.headingtext}>Cname</Text>
                <Text style={styles.headingtext}>View</Text>
                <Text style={styles.headingtext}>Edit</Text>
                <Text style={styles.headingtext}>Delete</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    listheader: {
        flex: 1,
        flexDirection: 'row',
        fontStyle: 'normal'
    },
    headingtext: {
        width: 80,
        height: 30,
        textAlign: 'center',
        fontSize: 18,
    }
});