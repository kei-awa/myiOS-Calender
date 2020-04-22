import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import ProgressCircle from 'react-native-progress-circle';

export default class CircleProject extends Component {
    render() {

        return (
            <View>
                <View style={styles.circleProject}>
                    <View style={styles.progressCircle}>
                        <ProgressCircle
                            percent={60}
                            radius={101}
                            borderWidth={2}
                            color="#1998FF"
                            shadowColor="#fff"
                            bgColor="#fff"
                        >

                                <View style={{ borderWidth: 2,
                                                borderColor: "#1998FF",
                                                height:198,
                                                width:198,
                                                borderRadius:99}}>
                                                    <Text style={{  }}>{"50%"}</Text>
                                                </View>

                        </ProgressCircle>
                    </View>
                    
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    circleProject:{
        margin: 50,
        borderWidth: 2,
        borderColor: "#1998FF",
        height:206,
        width:206,
        borderRadius:103
    },
    progressCircle:{
        margin:0.1
    },
    innerCircle:{
        margin: 5,
        borderWidth: 3,
        borderColor: "#1998FF",
        height:196,
        width:196,
        borderRadius:98
    }
})
