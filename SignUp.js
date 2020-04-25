import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import firebase from 'firebase';


export default class SignUp extends Component {
    state= {
        email: '',
        password:''
    }

    handleSubmit() {
        //submit()
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((user) => {
            const { navigation} = this.props;
            navigation.navigate('Calender')
        })
        .catch((error) => {
            alert(error)
        });
    }
    render () {
        return (
            <View style={styles.LoginContainer}>
                <Text style={styles. LoginTitle}>ユーザー登録</Text>
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
                    <Button title="登録" onPress={this.handleSubmit.bind(this)} />
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
        padding:2,
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