import React, { Component } from 'react';
import { StyleSheet, View, Text} from 'react-native';
import DatePicker from './DatePicker';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import DayTaskList from './DayTask/DayTaskList';

// import Month from 'MonthTask/Month';


export default class Apple extends Component {
    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.handleRedMonth = this.handleRedMonth.bind(this);
        this.handleAddMonth = this.handleAddMonth.bind(this);
        this.state = {
            selectedDate: new Date(),
        }
    }

    render () {
        const { selectedDate } = this.state;
        return (
            <View style={styles.App}>
                <View style={styles.EmptyText}></View>
                 <Text style={styles.A_Calendar}>A Calendar</Text>
                <View style={styles.Calender}>
                    <DatePicker fullDate={selectedDate} onDayClick={this.handleDayClick} redMonth={this.handleRedMonth} addMonth={this.handleAddMonth} />
                </View>
                <View>
                    <DayTaskList
                        fullDate={selectedDate}
                        onDayClick={this.handleDayClick}
                        />
                </View>
                <View style={styles.MonthTask}>
                    {/* <Month /> */}
                </View>
            </View>
        );
    }
    handleDayClick(newDay) {
        const {selectedDate} = this.state;
        this.setState({
            selectedDate: new Date(
                selectedDate.getFullYear(),
                selectedDate.getMonth(),
                newDay
            ),
        });
    }
    handleRedMonth(newDay) {
        const {selectedDate} = this.state;
        this.setState({
            selectedDate: new Date(
                selectedDate.getFullYear(),
                selectedDate.getMonth() - 1,
                selectedDate.getDate()
            ),
        });
    }
    handleAddMonth(newDay) {
        const {selectedDate} = this.state;
        this.setState({
            selectedDate: new Date(
                selectedDate.getFullYear(),
                selectedDate.getMonth() + 1,
                selectedDate.getDate()
            ),
        });
    }
}

const styles = StyleSheet.create({
    App:{
        flexDirection: 'column'
    },
    EmptyText:{
        backgroundColor: "#082981",
        height: 50,
    },
    A_Calendar:{
        height: 50,
        fontSize: 40,
        left: 0,
        right: 0,
        textAlign: "center",
        backgroundColor: "#082981",
        color: "#fff",
    }
})