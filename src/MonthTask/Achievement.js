import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native'; 
import * as Progress from 'react-native-progress';

export default class Achievement extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 0};
    
        this.achievementClick = this. achievementClick.bind(this);
      }
    render () {
        return (
            <View>
                <Progress.Bar progress={0.3} width={200} />
                <Progress.Pie progress={0.4} size={50} />
                <Progress.Circle size={30} indeterminate={true} />
                <Progress.CircleSnail color={['red', 'green', 'blue']} />
            </View>
        )
    }
}