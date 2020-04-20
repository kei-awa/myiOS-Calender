import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native'; 
import Achievement from './Achievement';


export default class MonthTasK extends Component {
    constructor(props) {
        super(props);
        this.state = {
            monthTasks: [],
            task: "",
        };
        this.deleteTask = this.deleteTask.bind(this);
    }
    deleteTask(e) {
        this.setState({
            monthTasks: this.state.monthTasks.filter(x => x !== e)
        })
    }
    render () {
        return (
            <View style={styles.Month}>
                <Text style={styles.month_addTitle}>今月の予定を追加</Text>
                <Text style={styles.TitleText}>title:</Text>            
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={value => this.setState({task:value})}
                    value={this.state.value}
                />
                 <TouchableOpacity style={{backgroundColor : "blue"}} onPress={() => {
                     this.setState({
                         monthTasks:[
                            ...this.state.monthTasks,
                            {
                                task:this.state.task
                            }
                         ]
                     })
                 }}>
                        <Text style={{color: "#fff",}}> submit</Text>
                </TouchableOpacity>
                <Text>今月の予定</Text>
                {this.state.monthTasks.map((tasks) => {
                    return (
                    <Achievement 
                        task={tasks.task}
                        onTaskDelete={() => this.deleteTask(tasks)} />
                    )
                })}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Month:{

    },
    month_addTitle:{

    },

})