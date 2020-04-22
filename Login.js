import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default class Login extends Component {

    render () {
        return (
            <View style={styles.LoginContainer}>
                <Text style={styles. LoginTitle}>Login</Text>
                <TextInput style={styles.input} value="E_Mail Address" />
                <TextInput  style={styles.input} value="PassWord" />
                <View style={styles.LoginBtn}>
                    <Button title="Login" onPress={() => {}} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    LoginContainer:{
        marginTop: 20, 
        width: "100%",
    },
    input:{
        margin:20,
        height: 40,
        borderColor: "#eee",
        borderWidth: 1,
        backgroundColor: "#eee"
    },
    LoginTitle:{
        fontSize: 26,
        textAlign:"center",

    },
    LoginBtn:{
        width: "25%",
    }
})