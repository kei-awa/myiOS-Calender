import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native'; 
import ProgressCircle from 'react-native-progress-circle';

export default class Result extends Component{
   
    render() {
        const {achievement, congratulation} =this.props;
        if (congratulation) {
            return (
                    <View>
                        <ProgressCircle
                                        percent={100}
                                        radius={80}
                                        borderWidth={2}
                                        color="#1998FF"
                                        shadowColor="#fff"
                                        bgColor="#fff"
                                    >
                            <Text style={{ fontSize: 18 }}>congratulation!!</Text>
                        </ProgressCircle>
                    </View>
            );
        } else {
            return (
                <View>
                    <ProgressCircle
                                    percent={achievement + 1}
                                    radius={80}
                                    borderWidth={2}
                                    color="#1998FF"
                                    shadowColor="#fff"
                                    bgColor="#fff"
                                >
                        <Text style={{ fontSize: 18 }}>{achievement}{'%'}</Text>
                    </ProgressCircle>
                </View>
            );
        }
           
    }
}