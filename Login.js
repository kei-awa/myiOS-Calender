import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';






export default class Login extends Component {
    state= {
        email: '',
        PassWord:''
    }


    handleSubmit() {
        //submit()
        const { navigation} = this.props;
        navigation.navigate('Calender')
    }
    render () {
        

        return (
            <View style={styles.LoginContainer}>
                <Text style={styles. LoginTitle}>Login</Text>
                <TextInput 
                style={styles.input} 
                onChangeText={(value) => {this.setState({ email:value })}}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder=" Email Address"
                />
                <TextInput  style={styles.input}
                 onChangeText={(value) => {this.setState({ PassWord:value })}}
                 autoCapitalize="none"
                 autoCorrect={false}
                 secureTextEntry
                 placeholder=" PassWord"
                />
                <View style={styles.LoginBtn}>
                    <Button title="Login" onPress={this.handleSubmit.bind(this)} />
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