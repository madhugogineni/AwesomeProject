import React from 'react';
import { Text, View,StyleSheet } from 'react-native';

export default class StudentListHeader extends React.Component {
    render() {
        return (
            <View style={styles.student_listheader}>
                <Text style={styles.student_headingtext}>Sid</Text>
                <Text style={styles.student_headingtext}>Sname</Text>
                <Text style={styles.student_headingtext}>Sage</Text>
                <Text style={styles.student_headingtext}>Class</Text>
                <Text style={styles.student_headingtext}>Edit</Text>
                <Text style={styles.student_headingtext}>Delete</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    student_listheader: {
        flex: 1,
        flexDirection: 'row',
        fontStyle: 'normal'
    },
    student_headingtext: {
        width: 80,
        height: 30,
        textAlign: 'center',
        fontSize: 18,
    }
});