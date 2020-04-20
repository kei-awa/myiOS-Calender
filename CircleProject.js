import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';


export default class CircleProject extends Component {
    render () {
        return (
            <View style={styles.CircleProject}>
                <View style={styles.leftCircle_under}>
                    <View style={styles.leftCircle_over}></View>
                </View>
                <View style={styles.rightCircle_under}>
                    <View style={styles.rightCircle_over}></View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    leftCircle_under:{
    },
    leftCircle_over:{
    },
    rightCircle_under:{

    },
    rightCircle_over:{

    }
})