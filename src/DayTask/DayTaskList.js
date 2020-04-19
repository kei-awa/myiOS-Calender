import React, { Component } from 'react';
import { StyleSheet, View, Text, Picker} from 'react-native';



export default class DayTaskList extends Component {
    handleChange(event) {
        
        this.setState({
            [event.target.name]:event.target.value });
      }
    
    handleSubmit(event) {
        const { fullDate } = this.props;
        const year = fullDate.getFullYear();
        const month = fullDate.getMonth();
        const date = fullDate.getDate();
        //alert('Your favorite flavor is: ' + this.state.start +  "~" + this.state.finish +  this.state.title +" " + month + date );
        this.setState({
            taskList: [
                ...this.state.taskList,
                {
                    year: year,
                    month: month,
                    date: date,
                    title: this.state.title,
                    start: this.state.start,
                    finish: this.state.finish,
                }
            ],
        });
        event.preventDefault();
    }

    deleteTask(e) {
        this.setState({
            taskList: this.state.taskList.filter(x => x !== e)
        })
    }

    render () {
        const hours = [];
        for (let i = 0;i <= 24; i++) {
            hours.push(i);
        }
        const minutes = []
        for (let i = 0; i <= 5; i++ ) {
            minutes.push(i * 10);
        }
        const { fullDate, onDayClick} = this.props;
        const year = fullDate.getFullYear();
        const month = fullDate.getMonth();
        const date = fullDate.getDate();

        return (
            <View style={styles.DayTaskList}>
                <Text>今日の予定を追加</Text>
                <Text>Init</Text>
                
            </View>
        );
    }
    constructor(props) {
        super(props);
        this.state = {
            taskList: [],
            startH: 0,
            startM: 0,
            finishH:0,
            finishH:0,
            title:'example :)'};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }
}

const styles = StyleSheet.create({

})

{/* <View>
    <Text>Init</Text>
    <Picker selectedValue={this.state.startH}>
        {hours.map(num => (
            <Picker.Item label={num} value={num} />
        ))}
    </Picker>
    <Text> : </Text>
    <Picker selectedValue={this.state.startM}>
        {minutes.map(num => (
            <Picker.Item label={num} value={num} />
        ))}
    </Picker>
    <Text>~</Text>
    <Picker selectedValue={this.state.finishH}>
        {hours.map(num => (
            <Picker.Item label={num} value={num} />
        ))}
    </Picker>
    <Picker selectedValue={this.state.finishM}>
        {minutes.map(num => (
            <Picker.Item label={num} value={num} />
        ))}
    </Picker>
</View> */}