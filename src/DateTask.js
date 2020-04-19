import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';


const hours = [];
for (let i = 0; i <= 24; i++){
    hours.push({label: String(i), value: i});
}
const minutes = [];
for (let i = 0; i <= 5; i++) {
    minutes.push({label: String(i*10), value: i*10});
}
export default class DateTask extends Component {
    constructor(props){
        super(props);
        this.state =
            {
                taskList:[],
                year: 0,
                month: 0,
                date: 0,
                startH: 0,
                startM: 0,
                finishH: 0,
                finishM:0,
                title: "未定",
            }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    
    
    render () {
            const init = {
                    label: 'init',
                    value: 0,
                    color: '#9EA0A4',
                };
            const finish = {
                label: 'fin',
                value: 0,
                color: '#9EA0A4',
            };
            const {fullDate} = this.props;
            const year = fullDate.year;
            const month = fullDate.month;
            const date = fullDate.day;
            
            
        console.log(fullDate.year + ',' + fullDate.month + ',' + fullDate.day + 'がクリックされた');
        console.log(this.state.taskList);
        return (
            <View>
                 <Text>{month}, {date}の予定</Text>
                    <View style={styles.timePicker}>
                        <RNPickerSelect
                            placeholder={init}
                            style={{
                                inputIOS:{
                                    width: 35,
                                    fontSize: 19,
                                    marginTop: 11,
                                    height: 27,
                                    textAlign: "center",
                                    borderColor: '#595151',
                                    color: '#595151',
                                    borderWidth: 1,
                                    borderRadius: 6
                                }
                            }}
                            onValueChange={(value) => this.setState({startH:value})}
                            value={this.state.startH} 
                            items = {hours}/>
                            <Text style={styles.timeText}>：</Text> 
                <RNPickerSelect
                    placeholder={init}
                    style={{
                        inputIOS:{
                            width: 35,
                            fontSize: 19,
                            marginTop: 11,
                            height: 27,
                            textAlign: "center",
                            borderColor: '#595151',
                            color: '#595151',
                            borderWidth: 1,
                            borderRadius: 6
                        }
                    }}
                    onValueChange={(value) => this.setState({startM:value})}
                    value={this.state.startM}
                    items = {minutes}/>
                <Text style={styles.timeText2}>~</Text>
                    <RNPickerSelect
                        style={{
                            inputIOS:{
                                width: 35,
                                fontSize: 19,
                                marginTop: 11,
                                height: 27,
                                textAlign: "center",
                                borderColor: '#595151',
                                color: '#595151',
                                borderWidth: 1,
                                borderRadius: 6
                            }
                        }}
                        placeholder={finish}
                        onValueChange={(value) => this.setState({finishH:value})}
                        value={this.state.finishH} 
                        items = {hours}/>
                <Text style={styles.timeText}>：</Text>
                <RNPickerSelect
                        placeholder={finish}
                        style={{
                            inputIOS:{
                                width: 35,
                                fontSize: 19,
                                marginTop: 11,
                                height: 27,
                                textAlign: "center",
                                borderColor: '#595151',
                                color: '#595151',
                                borderWidth: 1,
                                borderRadius: 6
                            }
                        }}
                        onValueChange={(value) => this.setState({finishM:value})}
                        value={this.state.finishM} 
                        items = {minutes}/>
                
            </View>
            <View>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={value => this.setState({title:value})}
                value={this.state.value}
                />
            </View>
            <Button title="Submit" onPress={() => {
                this.setState({
                        taskList: [
                        ...this.state.taskList,
                        {
                            year: year,
                            month: month,
                            date: date,
                            startH: this.state.startH,
                            startM: this.state.startM,
                            finishH: this.state.finishH,
                            finishM: this.state.finishM,
                            title: this.state.title,
                        }
                    ],
                })
            }} /> 
            </View>
        )
    }
    handleSubmit() {
        // const { fullDate } = this.props;
        // const year = fullDate.year;
        // const month = fullDate.month;
        // const date = fullDate.day;
        //alert('Your favorite flavor is: ' + this.state.start +  "~" + this.state.finish +  this.state.title +" " + month + date );
        this.setState({
            taskList: [
                ...this.state.taskList,
                {
                    // year: year,
                    // month: month,
                    // date: date,
                    startH: this.state.startH,
                    startM: this.state.startM,
                    finishH: this.state.finishH,
                    finishM: this.state.finishM,
                    title: "未定",
                    detail: "未定"
                }
            ],
        });
        event.preventDefault();
    }
}

const styles = StyleSheet.create({
    timeText: {
        fontSize: 20,
        marginTop: 16,
        textAlign: "center",
        fontWeight: "bold",
    },
    timeText2: {
        fontSize: 20,
        marginTop: 12,
        textAlign: "center"
    },
    timePicker:{
        flexDirection: "row",
    }
})

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    }
})