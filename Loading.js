import React from 'react';
import { ActivityIndicator,StyleSheet, View, Text} from 'react-native';

const Loading = (props) => {
    const { isLoading} = props;
    if (!isLoading) {
        return null;
    }
        return (
             <View style={styles.container}>
                 <ActivityIndicator style={{size:large}}/>
                 <Text style={{fontSize: 18}}>ログイン中...</Text>
             </View>
        );
}

export default Loading();

const styles = StyleSheet.create({
    container:{
        position:"absolute",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        zIndex: 100,
        justifyContent: "center",
        alignContent: "center",
        margin: 40,
    }
});