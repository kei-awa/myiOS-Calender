import React, { Component } from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';
import { getMonthName } from './helpers';
import Calender_Month from './Calender_Month';


export default class DatePicker extends Component {
    render() {
        const { fullDate, onDayClick } = this.props;
        const { redMonth, addMonth} = this.props;
        const dateNumber = fullDate.getDate();
        const monthNumber = fullDate.getMonth();
        const yearNumber = fullDate.getFullYear();
        const MonthName = getMonthName(monthNumber);

        return (
            <View>
                <View style={styles.Month_titles}>
                    <Button title="<<" style={styles.addButton} onPress={redMonth} />
                        <Text style={styles.Month_title} >
                            {yearNumber}年 {MonthName}
                        </Text>
                    <Button title=">>"style={styles.addButton} onPress={addMonth} />
                </View>
                <View style={styles.SomeMonth}>
                    <Calender_Month 
                        date={dateNumber}
                        month={monthNumber}
                        year={yearNumber}
                        onDayClick={onDayClick} />
                </View>
            </View> 
        )
    }
}

const styles = StyleSheet.create ({
    Month_title: {
        fontSize: 30,
        color: "#4f4f4f",
    },
    Month_titles: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    addButton:{
        borderColor: "#000",
        borderWidth: 1,
        borderRadius:  1,
        backgroundColor:"#4f4f4f"
    },
    SomeMonth:{
        borderColor: "#000",
        borderWidth: 1,
        borderRadius:  1,
    }
})