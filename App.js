import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import DateTask from './src/DateTask';
import MonthTask from './src/MonthTask/MonthTask'
import {Calendar} from 'react-native-calendars';
//import CircleProject from './CircleProject';


const today = new Date();

export default class App extends Component {
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
            <View style={styles.Empty_title}></View>
            <View style={styles.A_Calender}>
              <Text style={styles.Text_Title}>A  Calendar</Text>
            </View>
            <Calendar style={styles.container}
              onDayPress = {(day) => {this.setState({selectedDate:day})}}/>
                <DateTask
                fullDate={selectedDate}
                />
                <MonthTask />
          </View>
        </ScrollView>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  Empty_title:{
    backgroundColor: "#082981",
    height: 50,
  },
  A_Calender:{
    height: 50,
    left: 0,
    right: 0,
    backgroundColor: "#082981",
    
  },
  Text_Title:{
    fontSize: 25,
    textAlign: "center",
    color: "#fff",
  }
})


