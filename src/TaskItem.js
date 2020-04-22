import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default class TaskItem extends Component {
    render () {
        const {
            year,
            month,
            date,
            startH,
            startM,
            finishH,
            finishM,
            title,
            onTaskDelete,
            fullDate,
            taskList,
            selectedD,
            selectedM,
            selectedY,
            ...props
        }= this.props;

        if (selectedD && selectedM && selectedY) {
            return (
                <View {...props}>
                    <View style={styles.taskItem}>
                        <Text style={styles.ToDoTitle}>{title}</Text>
                        <View style={styles.underLine}></View>
                         <View style={{flexDirection: 'row', marginTop: 10, justifyContent: "space-around", marginRight:10}}>
                            <View style={styles.dayInfo}>
                                <Text style={styles.dayInfoText}>date</Text>
                                <Text style={styles.selectDayText}>{year},{month},{date}</Text>
                            </View>
                            <View　style={styles.timeInfo}>
                                <Text style={styles.timeText}>time</Text>
                                <Text style={styles.toDoTime}>{startH}:{startM}~{finishH}:{finishM}</Text>
                            </View>
                                <TouchableOpacity style={styles.deleteBtn} onPress={onTaskDelete}>
                                    <Text style={{color: "#fff",}}> delete</Text>
                                </TouchableOpacity>
                        </View>
                    </View>
                </View>
            );
        } else {
            return (null);
        }
    }    
}

const styles = StyleSheet.create({
    taskItem:{
        marginTop: 10,
        marginLeft: 30,
        marginRight: 30,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 12,
    },
    toDoTime:{
        fontSize: 15,
    },
    underLine:{
        marginRight: 10,
        marginLeft: 10,
        borderBottomColor: "black",
        borderBottomWidth: 1,
    },
    ToDoTitle:{
        margin: 25,
        fontSize: 25,
    },
    deleteBtn:{
        marginTop: 5,
        justifyContent: 'center',                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
        backgroundColor: "red",
        marginBottom: 10,
        width:51,
        height:30,
        borderRadius: 8
    },
    dayInfo:{
        marginLeft: 20,
        width:100,
    },
    timeInfo:{

        width:100,
    }
})