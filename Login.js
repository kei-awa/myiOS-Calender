import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import firebase from 'firebase';

export default class Login extends Component {
    state= {
        email: '',
        password:''
    }


    handleSubmit() {
        //submit()
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((user) => {
                console.log("success", user);
                const { navigation} = this.props;
                navigation.navigate('Calender')
            })
            .catch((error) => {
                console.log(error);
            })
    }
    render () {
        const { navigation} = this.props;
        return (
            <View style={styles.LoginContainer}>
                <Text style={styles. LoginTitle}>Login</Text>
                <TextInput 
                style={styles.input} 
                value={this.state.email}
                onChangeText={(value) => {this.setState({ email:value })}}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder=" Email Address"
                />
                <TextInput  
                style={styles.input}
                value={this.state.password}
                 onChangeText={(value) => {this.setState({ password:value })}}
                 autoCapitalize="none"
                 autoCorrect={false}
                 secureTextEntry
                 placeholder=" PassWord"
                />
                <View style={styles.LoginBtn}>
                    <Button title="Login" onPress={this.handleSubmit.bind(this)} />
                    <Button title="SignUp" onPress={() => {navigation.navigate('SignUp')}} />
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
        padding: 3,
        margin:20,
        height: 40,
        borderColor: "grey",
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