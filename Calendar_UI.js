import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import DateTask from './src/DateTask';
import MonthTask from './src/MonthTask/MonthTask'
import {Calendar} from 'react-native-calendars';



const today = new Date();

export default class  Calendar_UI extends Component {
    constructor(props) {
      super(props);
        this.state = {
          selectedDate: {
            year: today.getFullYear(),
            month: today.getMonth() + 1,
            day: today.getDate()
          }
        }
    }
  render () {
    const {selectedDate} = this.state;
      return (
        <ScrollView>
          <View>
            <Calendar style={styles.container}
              onDayPress = {(day) => {this.setState({selectedDate:day})}}/>
                <DateTask
                fullDate={selectedDate}
                />
                <MonthTask />
          </View>
          <View style={styles.footer}></View>
          </ScrollView>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  footer:{
    marginTop: 100,
    height: 50
  }
})


