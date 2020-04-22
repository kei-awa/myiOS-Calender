import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity} from 'react-native';
import TaskItem from './TaskItem';
import RNPickerSelect from 'react-native-picker-select';
import Modal from 'react-native-modal';


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
            };
        this.deleteTask = this.deleteTask.bind(this);
    }
    state = {
        isModalVisible: false,
      };

    toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
    };
    render () {
            const init = {
                    label: '00',
                    value: 0,
                    color: '#9EA0A4',
                };
            const finish = {
                label: '00',
                value: 0,
                color: '#9EA0A4',
            };
            const {fullDate} = this.props;
            const year = fullDate.year;
            const month = fullDate.month;
            const date = fullDate.day;
            
            
        return (
            <View>
                {/* モダル追加 */}
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity style={styles.TaskAddBtn} onPress={this.toggleModal}>
                        <Text style={{fontSize: 20, color: "#fff"}}>+  {month}, {date}の予定を追加</Text>
                    </TouchableOpacity>
                </View> 
                <Modal isVisible={this.state.isModalVisible}
                        style={styles.submitModal}>
                <View>
                <Text style={{fontSize: 50, marginLeft: 50}}>{year}. {month}. {date}</Text>
                <Text style={{fontSize: 20, margin: 10 ,marginLeft: 50 }}>時刻</Text>
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
                                    color: '#595151',
                                    borderBottomColor: '#595151',
                                    borderBottomWidth: 1,
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
                                    color: '#595151',
                                    borderBottomColor: '#595151',
                                    borderBottomWidth: 1,
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
                                        color: '#595151',
                                        borderBottomColor: '#595151',
                                        borderBottomWidth: 1,
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
                                        color: '#595151',
                                        borderBottomColor: '#595151',
                                        borderBottomWidth: 1,
                                    }
                                }}
                                onValueChange={(value) => this.setState({finishM:value})}
                                value={this.state.finishM} 
                                items = {minutes}/>
                    </View>
                    <View>
                    <Text style={{fontSize: 20, marginTop: 10, marginBottom: 0,marginLeft: 50}}>タイトル</Text>
                    <TextInput
                        style={{ margin:50, marginTop: 0, marginBottom: 0, height: 100, borderBottomColor: 'gray', borderBottomWidth: 1, fontSize: 18 }}
                        onChangeText={value => this.setState({title:value})}
                        value={this.state.value}
                        />
                    </View>
                    <View style={{ margin:75, marginTop: 0, marginBottom: 0}}>
                        <Button title="Add" onPress={() => {
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
                                isModalVisible: !this.state.isModalVisible
                            })
                        }} />
                        <Button title="Close" onPress={this.toggleModal} />
                    </View>
                </View>
            </Modal>
            {/* タスクリスト */}
                <View style={styles.plus}>
                    <Text style={{ fontSize: 30, marginLeft: 30,}}>{month}, {date}の予定</Text>
                    <View style={{ borderBottomColor: "black", borderBottomWidth: 2 ,margin: 20}}></View>
                    {this.state.taskList.map(task => (
                        <TaskItem 
                            key={task.title}
                            year={task.year}
                            month={task.month}
                            date={task.date}
                            startH={task.startH}
                            startM={task.startM}
                            finishH={task.finishH}
                            finishM={task.finishM}
                            title={task.title}
                            onTaskDelete={() => this.deleteTask(task)}
                            fullDate={fullDate}
                            taskList={this.state.taskList}
                            selectedD={task.date === date}
                            selectedM={task.month === month}
                            selectedY={task.year === year}
                            />
                    ))}
                </View>
            </View>
            
        )
    }
    deleteTask(e) {
        this.setState({
            taskList: this.state.taskList.filter(x => x !== e)
        })
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
        marginLeft:50
    },
    submitModal:{
        backgroundColor: "#fff",
        borderRadius: 10,
        marginTop: 100,
        marginBottom: 400,
    },
    plus:{
       marginTop:30

    },
    TaskAddBtn:{
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row",
        backgroundColor: "#D62032",
        height: 60,
        borderRadius: 30,
        width: 200
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