import React, { Component } from 'react';
import Weekday from './Weekday';
import Day from './Day';
import { weekdays, addreviatFromWeekday, getWeeksForMonth } from "./helpers";
import { StyleSheet, View, Text} from 'react-native';

export default class Calender_Month extends Component {
    constructor(props) {
        super(props);
        this.renderWeek = this.renderWeek.bind(this);
    }
    render () {
        const {month, year} = this.props;
        const weekdayMarkup = weekdays.map(weekday =>{
            return (
                <Weekday
                    key={weekday}
                    title={addreviatFromWeekday(weekday)}
                    label={weekday}
                />
            );
        });
        
        const weeks = getWeeksForMonth(month, year);
        const weeksMarkup = weeks.map((week, index) => {
            return (
                <Text key={index}>
                    {week.map(this.renderWeek)}
                </Text>
            );
        })
        return (
            <React.Fragment>
                <Text className="MonthContainer">{weekdayMarkup}</Text>
                {weeksMarkup}
            </React.Fragment>
        );
    }
    renderWeek(fullDate, dayIndex) {
        const { onDayClick } = this.props;
        if (fullDate == null) {
            return <Day key={dayIndex} />;
        }

        const date = fullDate.getDate();
        return (<Day 
                    key={dayIndex}
                    fullDate={fullDate} 
                    onClick={onDayClick}
                    selected={date === this.props.date} />);
    }
}

const styles = StyleSheet.create({
    Week:{
        display: "flex"
    },
    MonthContainer: {
        justifyContent: "center",
        display: "flex"
    }
})