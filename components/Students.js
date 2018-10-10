import React from 'react';
import { Text, StyleSheet } from 'react-native';
export default class Students extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cid: this.props.navigation.state.params.cid,
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
            <Text style={styles.student_text}>{this.props.navigation.state.params.cid}</Text>
        );
    }
}
const styles = StyleSheet.create({
    student_text: {
        fontSize: 20
    }
});
