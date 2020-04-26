import React, { Component } from 'react';
import { ActivityIndicator,StyleSheet, View, Text} from 'react-native';


class Loading extends Component {
    render() {
        const {isLoading} = this.props;
        if (!isLoading) {
            return null;
        } else {
            return (
                <View style={styles.container}>
                    <View style={styles.Loadingtext}>
                        <ActivityIndicator />
                        <Text style={{fontSize: 18, margin: 20}}>ログイン中...</Text>
                    </View>
                </View>
            );   
        } 
    }
}

export default Loading;

const styles = StyleSheet.create({
    container:{
        position:"absolute",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        height: 1000,
        zIndex: 300,
        justifyContent: "center",
        textAlign:"center",
    },
    Loadingtext:{
        position: "absolute",
        height: 600,
        marginLeft: 125,


    }
});